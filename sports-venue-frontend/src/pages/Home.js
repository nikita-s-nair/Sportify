import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Sportify</h1>
      <p className="text-lg mb-8">Book your favorite sports venue effortlessly.</p>
      <div className="flex gap-4">
        <Link to="/venues" className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600">
          Browse Venues
        </Link>
        <Link to="/bookings" className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600">
          View Bookings
        </Link>
      </div>
    </div>
  );
};

export default Home;
