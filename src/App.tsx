import React from 'react';
import Profile from './components/Profile';
import "./App.css";

function App() {
  const tasks = ['Learn React', 'Build an App', 'Enjoy Coding'];
  const age = 18;
  const name = 'Cao Hai';

  return (
    <div>
      <h1>My To-Do List</h1>
      <div>{name} - {age}</div>
      <div>{tasks}</div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <Profile />
    </div>
  );
}

export default App;
