import React from 'react';
import TodoList from './components/TodoList';
import "./App.css";

function App() {
  return (
    <div className='container'>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
