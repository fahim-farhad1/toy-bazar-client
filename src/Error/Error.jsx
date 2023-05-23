import React from 'react';
import error from '../assets/Banner-Image/404.gif'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={error} // Replace with the path to your 404 image
        alt="Page Not Found"
        className="w-64 h-64 mb-8"
      />
      <h1 className="text-3xl font-bold">Oops! Page Not Found</h1>
      <p className="text-gray-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to='/'><button className='btn btn-link'>Back to home </button></Link>
    </div>
  );
};

export default Error;
