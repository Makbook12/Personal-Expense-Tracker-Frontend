import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
const API_URL = process.env.REACT_APP_API_URL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Invalid credentials' };
      setUser(data.user);
      return { success: true };
    } catch {
      return { success: false, error: 'Network error' };
    }
  };

  const register = async (email, password, name) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Registration failed' };
      setUser(data.user);
      return { success: true };
    } catch {
      return { success: false, error: 'Network error' };
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy access
export function useAuth() {
  return useContext(AuthContext);
}