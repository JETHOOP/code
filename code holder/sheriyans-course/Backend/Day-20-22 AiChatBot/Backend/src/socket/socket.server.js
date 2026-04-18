const { Server } = require('socket.io');
const generateResponse = require('../services/ai.service')

const chatHistory = []

const initialserver = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        socket.on('ai-message', async (data) => {
            try {
                const userText = typeof data === 'string' ? data : (data?.prompt || '');

                if (!userText) {
                    return socket.emit('ai-message-response', 'Please send a non-empty message.');
                }

                chatHistory.push({
                    role: 'user',
                    parts: [{ data: [{ text: userText }] }]
                });

                const response = await generateResponse(chatHistory);

                chatHistory.push({
                    role: 'model',
                    parts: [{ data: [{ text: response }] }]
                });

                // emit a plain string so frontend receives the text directly
                socket.emit('ai-message-response', response);
            } catch (err) {
                console.error('Socket handler error:', err);
                socket.emit('ai-message-response', 'An error occurred while generating the response.');
            }
        });

    })

}

module.exports = initialserver;