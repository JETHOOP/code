import React, { useState } from 'react';
import Create from './components/Create';
import Read from './components/Read';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "play game", isCompleted: false }
  ]);

  return (
    <>
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;