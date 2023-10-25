import React from 'react';
import { Link } from 'react-router-dom';
import {  Flip } from 'react-awesome-reveal';

const ErrorPage = () => {
    return (
        <div className='error-page flex justify-center items-center text-center'>
        <Flip>
          <div className='mt-20 py-20 space-y-3'>
          <h1 className='error-title text-5xl font-semibold text-red-600'>404</h1>
          <p className='error-message'>Oops! The page you're looking for does not exist.</p>
          <Link to='/' className='btn bg-[#6a9955] text-white back-button'>
            Back to Home
          </Link>
          </div>
        </Flip>
      </div>
    );
};

export default ErrorPage;