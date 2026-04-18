import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './App.css';

const App = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);

  const messagesContainerRef = useRef(null);
  const messageInputRef = useRef(null);

  useEffect(() => {
    // Initialize Socket.IO connection
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    // Connection event handlers
    newSocket.on('connect', () => {
      console.log('Connected to server');
      setIsConnected(true);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server');
      setIsConnected(false);
    });

    // AI response handler
    newSocket.on('ai-message-response', (data) => {
      setShowTypingIndicator(false);
      addMessage(data, 'ai');
      setIsTyping(false);
    });

    // Auto-focus on input
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }

    // Cleanup on unmount
    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, showTypingIndicator]);

  const addMessage = (text, sender) => {
    const newMessage = {
      id: Date.now() + Math.random(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const sendMessage = () => {
    const message = inputMessage.trim();
    if (!message || isTyping || !socket) return;

    addMessage(message, 'user');
    setInputMessage('');

    setIsTyping(true);
    setShowTypingIndicator(true);

    socket.emit('ai-message', message);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    autoResize(e.target);
  };

  const autoResize = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
    }, 100);
  };

  const TypingIndicator = () => (
    <div className="typing-indicator">
      <span>AI is typing</span>
      <div className="typing-dots">
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
      </div>
    </div>
  );

  const Message = ({ message }) => (
    <div className={`message ${message.sender}-message`}>
      {message.text}
    </div>
  );

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className={`connection-status ${!isConnected ? 'disconnected' : ''}`}></div>
        <h1>AI Assistant</h1>
        <p>Ask me anything and I'll help you out!</p>
      </div>

      <div className="messages-container" ref={messagesContainerRef}>
        {messages.length === 0 && (
          <div className="welcome-message">
            👋 Hello! I'm your AI assistant. How can I help you today?
          </div>
        )}

        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

        {showTypingIndicator && <TypingIndicator />}
      </div>

      <div className="input-container">
        <div className="input-wrapper">
          <textarea
            ref={messageInputRef}
            id="messageInput"
            placeholder="Type your message here..."
            rows="1"
            value={inputMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          id="sendButton"
          onClick={sendMessage}
          disabled={!isConnected || isTyping}
        >
          <span id="sendIcon">
            {isTyping ? '⏳' : '➤'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;