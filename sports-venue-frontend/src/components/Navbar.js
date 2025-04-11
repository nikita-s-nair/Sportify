import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="bg-gray-100 p-4 shadow flex justify-between">
      <div>
        <Link className="mr-4 font-semibold" to="/">Home</Link>
        <Link className="mr-4" to="/venues">Venues</Link>
        {user && <Link className="mr-4" to="/bookings">My Bookings</Link>}
      </div>
      <div>
        {user ? (
          <>
            <span className="mr-2">Welcome, {user.username}</span>
            <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link className="mr-2" to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
