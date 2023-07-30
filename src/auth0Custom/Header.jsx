import React from 'react';
import isAuthenticated from './isAuthenticated';
import { Link, useNavigate } from 'react-router-dom';
import webAuth from './authConfig';

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute top-0 flex justify-center">
        {!isAuthenticated() && <Link to="/login">Log In / signUp</Link>}
        {isAuthenticated() && (
          <button
            onClick={() => {
              sessionStorage.removeItem('refresh_token');
              sessionStorage.removeItem('expires_at');
              localStorage.removeItem('user');
              webAuth.logout({
                returnTo: 'http://localhost:5173/',
              });
              // navigate('/');
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </>
  );
}
