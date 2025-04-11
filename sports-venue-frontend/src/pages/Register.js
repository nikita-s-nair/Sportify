import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/users', {
      username: form.username,
      email: form.email,
      role: 'USER' // default role
    }).then(() => {
      alert('Registered! Please login.');
      navigate('/login');
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" placeholder="Username" className="w-full border p-2" onChange={e => setForm({ ...form, username: e.target.value })} />
        <input type="email" placeholder="Email" className="w-full border p-2" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="w-full border p-2" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}
