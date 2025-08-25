import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import ElektroPage from './components/ElektroPage.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/elektro" element={<ElektroPage />} />
      </Routes>
    </div>
  );
}

export default App;