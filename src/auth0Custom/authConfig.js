import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  domain: import.meta.env.VITE_OAUTH_DOMAIN,
  clientID: import.meta.env.VITE_OAUTH_CLIENT_ID,
  responseType: `id_token`,
  redirectUri: `http://localhost:5173/user`,
  responseMode: `fragment`,
  scope: 'openid profile email offline_access',
});
export default webAuth;
