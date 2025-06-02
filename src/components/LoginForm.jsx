import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginForm = ({ onToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (!res.success) setError(res.error || 'Login failed');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <div className="mb-4 text-red-500 text-sm" role="alert">{error}</div>}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          required
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
          required
          autoComplete="current-password"
        />

        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <button onClick={onToggle} type="button" className="text-blue-600 underline">
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;