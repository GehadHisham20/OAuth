import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import Header from './auth0Custom/Header';
import LoginPage from './auth0Custom/LoginPage';
import RegisterPage from './auth0Custom/SignupPage';
import Profile from './auth0Custom/profile';
// import Profile from './authLock/profile';
// import ProtectedRoute from './auth0/Protected';
// import Header from './auth0/Header';
// import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <>
      {/* <Auth0Provider
        domain={import.meta.env.VITE_OAUTH_DOMAIN}
        clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}
        authorizationParams={{
          redirect_uri: 'http://localhost:5173/user',
        }}
      >
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<ProtectedRoute />} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider> */}

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/user" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
