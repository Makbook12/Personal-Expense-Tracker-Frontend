import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const RegisterForm = ({ onToggle }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) return setError('Password must be at least 6 characters');
    setLoading(true);
    const res = await register(email, password, name);
    setLoading(false);
    if (!res.success) setError(res.error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={name}
          onChange={(e) => { setName(e.target.value); setError(''); }}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(''); }}
        />

        <button
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <button onClick={onToggle} type="button" className="text-blue-600 underline">
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;