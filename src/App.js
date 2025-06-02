import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { useAuth } from './context/AuthContext';

function App() {
  const { user } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  // Toggle between login and register forms
  const handleToggle = () => setShowRegister((prev) => !prev);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Dashboard />
              ) : showRegister ? (
                <RegisterForm onToggle={handleToggle} />
              ) : (
                <LoginForm onToggle={handleToggle} />
              )
            }
          />
          <Route
            path="/login"
            element={
              user ? <Navigate to="/" /> : <LoginForm onToggle={handleToggle} />
            }
          />
          <Route
            path="/register"
            element={
              user ? <Navigate to="/" /> : <RegisterForm onToggle={handleToggle} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;