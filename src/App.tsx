import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1>My To-Do List</h1>} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
