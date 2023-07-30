import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Navigate, Outlet, Route, useNavigate } from 'react-router-dom';
import Profile from './profile';

const ProtectedRoute = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  if (isAuthenticated && user) {
    return <Profile user={user} />;
  } else if (!isAuthenticated) {
    // loginWithRedirect();
    navigate('/');
    // return (
    //   <Redirect
    //     to={{
    //       pathname: '/',
    //       state: {
    //         from: props.location,
    //       },
    //     }}
    //   />
    // );
  }
};

export default ProtectedRoute;
