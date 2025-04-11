import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    api.get('/users')
      .then(res => {
        const user = res.data.find(u => u.email === email);
        if (user) {
          sessionStorage.setItem('user', JSON.stringify(user));
          alert('Logged in!');
          navigate('/');
        } else {
          alert('User not found');
        }
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full border p-2 mb-3" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}
