import React from 'react';
import LogoutButton from './logout';
import LoginButton from './login';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div className="absolute top-0 flex justify-center">
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
      </div>
    </>
  );
}
