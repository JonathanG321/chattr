import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(props) {
  return (
    <div className="home-page">
      <div className="auth-card justify-center-vertical align-items-center-vertical">
        <h1 className="title">Chattr</h1>
        <Link className="max-width" to="sign-in">
          <button className="button max-width">Sign in with Existing Account</button>
        </Link>
        <Link className="max-width" to="/sign-up">
          <button className="button mt-1 max-width">Sign Up with New Account</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
