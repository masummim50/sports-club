import React from 'react';
import { Link } from 'react-router-dom';

const Nomatch = () => {
  return (
    <div className="min-vh-100 bg-danger text-white d-flex flex-column align-items-center justify-content-center">
      <h2>This page doesn't exist</h2>
      <Link className="text-decoration-none text-white btn btn-primary" to='/home'>Back to home</Link>
    </div>
  );
};

export default Nomatch;