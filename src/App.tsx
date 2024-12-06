import React from 'react';
import TodoList from './components/To_do_list';
import "./App.css";

function App() {
  return (
    <div className='container'>
        <div className='title'>
          <h1>ToDo List</h1>
        </div>
          <div className='main-content'>
            <div className='add-todo'>
              <button className='add-button'>Add Todo</button>
            </div>
            <div>
              <TodoList />
            </div>
      </div>
    </div>
  );
}

export default App;
