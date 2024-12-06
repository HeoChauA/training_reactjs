import React from 'react';
import "./App.css";
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center' }}>My To-Do List</h1>
      <Todos />
    </div>
  );
}

export default App;
