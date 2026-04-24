import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import ForgotPassword from './pages/ForgotPassword';
import LandingPage from './pages/LandingPage';
import SmoothScroll from './components/SmoothScroll';
import './App.css';



function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="app">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
