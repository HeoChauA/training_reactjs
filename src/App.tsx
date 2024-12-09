// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/profile" element={<Profile name="Nguyễn Văn A" age={25} location="Hà Nội, Việt Nam" />} />
          <Route path="/" element={<h1>Trang chủ</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
