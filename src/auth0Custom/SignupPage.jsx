// import { Auth0Lock } from 'auth0-lock';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import webAuth from './authConfig';

export default function RegisterPage() {
  const navigate = useNavigate();

  const webAuthLogin = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    webAuth.signup(
      {
        connection: import.meta.env.VITE_AUTH0_DB_CONNECTION,
        email,
        password,
      },
      async (err, result) => {
        if (err) {
          console.log(err);
          return err;
        }

        navigate('/login');
      }
    );
  };
  return (
    <>
      <h1>register page</h1>
      <div className="container">
        <div className="my-4">
          <hr />

          <div className="py-10">
            <h4 className="mb-5">Register with email and password:</h4>
            <p>
              <input id="email" className="mb-3" placeholder="email" />
            </p>
            <p>
              <input id="password" className="mb-3" placeholder="password" />
            </p>

            <button
              onClick={webAuthLogin}
              type="submit"
              className="btn btn-default login-db"
            >
              signup
            </button>
            <p>
              you have an account?
              <button
                onClick={() => navigate('/login')}
                type="submit"
                className="btn btn-default login-db"
              >
                signin
              </button>
              instead
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
