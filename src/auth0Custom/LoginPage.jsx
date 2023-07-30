// import { Auth0Lock } from 'auth0-lock';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import webAuth from './authConfig';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleAuthentication(result) {
    if (result.idToken || result.id_token) {
      let expiresAt = '';
      if (result.expiresIn) {
        expiresAt = JSON.stringify(
          result.expiresIn * 1000 + new Date().getTime()
        );
      } else {
        expiresAt = JSON.stringify(
          result.expires_in * 1000 + new Date().getTime()
        );
      }
      sessionStorage.setItem(
        'refresh_token',
        result.refreshToken ? result.refreshToken : result.refresh_token
      );
      sessionStorage.setItem('expires_at', expiresAt);
      setUser(result.accessToken);
    } else {
      navigate('/');
      window.location.reload();
    }
  }

  function setUser(accessToken) {
    webAuth.client.userInfo(accessToken, async (err, result) => {
      if (err) {
        console.error('Something went wrong: ', err.message);
        return;
      }
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/user');

      // return result;
    });
  }
  // const loginFb = () => {
  //   console.log('====================================');
  //   console.log('enterd');
  //   console.log('====================================');
  //   webAuth.authorize(
  //     {
  //       // organization: 'google-oauth2',
  //       responseType: 'id_token',
  //       redirectUri: 'http://localhost:5173/user',
  //       connection: 'google-oauth2',
  //       state: 'xyzABC123',
  //     },
  //     (err, result) => {
  //       console.log('====================================');
  //       console.log(result);
  //       console.log('====================================');
  //       if (err) {
  //         return err;
  //       }
  //       // await handleAuthentication(result);
  //     }
  //   );
  // };
  // const loginGoogle = async () => {
  //   console.log('====================================');
  //   console.log('enterd');
  //   console.log('====================================');
  //   webAuth.authorize(
  //     {
  //       // organization: 'google-oauth2',
  //       // responseType: 'id_token',
  //       redirectUri: 'http://localhost:5173/user',
  //       connection: 'google-oauth2',
  //     }
  //     // (err, result) => {
  //     //   console.log('====================================');
  //     //   console.log(result);
  //     //   console.log('====================================');
  //     //   if (err) {
  //     //     return err;
  //     //   }
  //     //   // await handleAuthentication(result);
  //     // }
  //   );
  // };
  const loginUser = async () => {
    webAuth.client.login(
      {
        realm: import.meta.env.VITE_AUTH0_DB_CONNECTION,
        username: document.getElementById('email').value,
        password: document.getElementById('password').value,
      },
      async (err, result) => {
        if (err) {
          return err;
        }
        await handleAuthentication(result);
      }
    );
  };

  return (
    <>
      <h1>login page</h1>
      <div className="container">
        <div className="my-4">
          {/* <h2>Actions</h2> */}

          <hr />

          <div className="py-10">
            <h4 className="mb-5">Login with email and password:</h4>
            <p>
              <input
                id="email"
                className="mb-3 update-user-email"
                placeholder="email"
              />
            </p>
            <p>
              <input
                id="password"
                className="mb-3 update-user-password"
                placeholder="password"
              />
            </p>

            <button onClick={loginUser} type="submit">
              login
            </button>
            {/* <button onClick={loginGoogle}>google</button> */}
            {/* <button onClick={loginFb}>facebook</button> */}

            <p>
              you don't have account?
              <button onClick={() => navigate('/register')} type="submit">
                signup
              </button>
              instead
            </p>
          </div>

          <hr />

          {/* <div>
              <h4>Login with passwordless connection:</h4>
              <div>
                <p>
                  <input className="passwordless-login-username update-user-email" />
                </p>
                <p>
                  <input
                    type="button"
                    className="btn btn-default passwordless-login-db"
                  />
                </p>
              </div>
              <div>
                <p>
                  <input className="passwordless-login-code" />
                </p>
                <p>
                  <input
                    type="button"
                    className="btn btn-default passwordless-login-verify"
                  />
                </p>
              </div>
            </div> */}

          <hr />

          {/* <div>
              <h4>Login with database connection (popup):</h4>
              <p>
                <input
                  className=""
                  id="popup-login-connection"
                  placeholder="Connection name; leave blank to use tenant default"
                />
              </p>
              <p>
                <input className="popup-login-username update-user-email" />
              </p>
              <p>
                <input className="popup-login-password update-user-password" />
              </p>
              <p>
                <input
                  type="button"
                  className="btn btn-default popup-login-db-preload"
                />
                <input
                  type="button"
                  className="btn btn-default popup-login-db"
                />
              </p>
            </div> */}

          <hr />

          {/* <div>
              <h4>Login with database connection (client login):</h4>
              <p>
                <input
                  className=""
                  id="client-login-realm"
                  placeholder="Realm name; leave blank to use tenant default"
                />
              </p>
              <p>
                <input
                  className="client-login-username update-user-email"
                  placeholder="User email"
                />
              </p>
              <p>
                <input
                  className="client-login-password update-user-password"
                  placeholder="User password"
                />
              </p>
              <p>
                <input type="button" />
              </p>
            </div> */}

          <hr />

          {/* <div>
              <h4>Login with /authorize:</h4>
              <p>
                <input
                  type="button"
                  className="btn btn-default btn-sm login-hosted"
                />
                <input
                  type="button"
                  className="btn btn-default btn-sm login-facebook"
                />
                <input
                  type="button"
                  className="btn btn-default btn-sm login-twitter"
                />
                <input
                  type="button"
                  className="btn btn-default btn-sm login-github"
                />
              </p>
            </div> */}

          <hr />

          {/* <div>
              <h4>Login with /authorize (popup):</h4>
              <input
                type="button"
                className="btn btn-default btn-sm popup-login-hosted"
              />
              <input
                type="button"
                className="btn btn-default btn-sm popup-login-facebook"
              />
              <input
                type="button"
                className="btn btn-default btn-sm popup-login-twitter"
              />
              <input
                type="button"
                className="btn btn-default btn-sm popup-login-github"
              />
            </div> */}

          <hr />
          {/* 
            <div>
              <h4>Renew authentication:</h4>
              <input type="button" className="btn btn-default renew-auth" />
            </div> */}

          <hr />

          {/* <div>
              <h4>Call token endpoint</h4>
              <input type="button" className="btn btn-default token-endpoint" />
            </div> */}

          <hr />

          {/* <div>
              <h4>Check if you have an active session:</h4>
              <input
                type="button"
                className="btn btn-default web-message-check-session"
              />
            </div> */}

          <hr />

          {/* <div>
              <h4>
                Get information about the last successful authorization request
              </h4>
              <input type="button" className="btn btn-default getssodata" />
            </div> */}

          <hr />

          {/* <div>
              <h4>SSO Logout:</h4>
              <input type="button" className="btn btn-default logout" />
            </div> */}

          <hr />

          {/* <h2>Config</h2>

            <div>
              <h4>Domain:</h4>
              <input className="" id="config-domain" />

              <h4>Client ID:</h4>
              <input className="" id="config-client-id" />

              <h4>Client ID (passwordless):</h4>
              <input className="" id="config-client-id-pwl" />

              <h4>User email:</h4>
              <input
                className="update-user-email"
                id="config-user-email"
                type="email"
              />

              <h4>User password:</h4>
              <input
                className="update-user-password"
                id="config-user-password"
              />

              <h4>Organization ID</h4>
              <p>
                This is only applicable when logging in using the Universal
                Login Page.
              </p>
              <div style={{ display: 'flex' }}>
                <input
                  type="text"
                  className="update-organization"
                  id="config-organization"
                  style={{ marginRight: '10px' }}
                />
                <input
                  type="button"
                  className="btn btn-default"
                  id="clear-org"
                />
              </div>

              <h4>User Invitation</h4>
              <p>Paste in an invitation URL and be logged in</p>
              <div>
                <input
                  type="button"
                  value="Test User Invitation"
                  className="btn btn-default"
                  id="invoke-invite"
                />
              </div>

              <br />
              <input
                type="button"
                className="btn btn-default"
                id="config-update"
                value="Update"
              />
            </div> */}
        </div>

        {/* <div className="col-xs-6">
            <h4>Console:</h4>
            <pre>
              <code id="console"></code>
            </pre>
            <div className="text-right">
              <i
                id="clear-console"
                aria-hidden="true"
                className="icon-budicon-498 icon"
              ></i>
            </div>
          </div> */}
      </div>
      {/* {user && navigate('/user')}
      {!user && <div id="auth0-login-container"></div>}; */}
    </>
  );
}
// // import React from 'react';
// // import { Navigate } from 'react-router-dom';
// // import Auth0Lock from 'auth0-lock';

// // class LoginPage extends React.Component {
// //   lock = new Auth0Lock(
// //     import.meta.env.VITE_OAUTH_CLIENT_ID,
// //     import.meta.env.VITE_OAUTH_DOMAIN,
// //     {
// //       auth: {
// //         responseType: 'token id_token',
// //         sso: false,
// //       },
// //       container: 'auth0-login-container',
// //       theme: {
// //         primaryColor: '#3a99d8',
// //       },
// //     }
// //   );

// //   constructor(props) {
// //     super(props);
// //     this.state = { loggedIn: false };
// //     this.onAuthenticated = this.onAuthenticated.bind(this);

// //     this.onAuthenticated();
// //   }

// //   onAuthenticated() {
// //     this.lock.on('authenticated', (authResult) => {
// //       let expiresAt = JSON.stringify(
// //         authResult.expiresIn * 1000 + new Date().getTime()
// //       );
// //       localStorage.setItem('access_token', authResult.accessToken);
// //       localStorage.setItem('id_token', authResult.idToken);
// //       localStorage.setItem('expires_at', expiresAt);

// //       this.setState({ loggedIn: true });
// //     });
// //   }

// //   componentDidMount() {
// //     // Avoid showing Lock when hash is parsed.
// //     if (!/access_token|id_token|error/.test(this.props.location.hash)) {
// //       this.lock.show();
// //     }
// //   }

// //   render() {
// //     const style = { marginTop: '32px' };
// //     return !this.state.loggedIn ? (
// //       <div>
// //         <h2>Login Page</h2>
// //         <div id="auth0-login-container" style={style}></div>
// //       </div>
// //     ) : (
// //       <div></div>
// //       // <Navigate to={'/user'} />
// //       //    <Redirect to={{
// //       //      pathname: '/private',
// //       //      state: { from: this.props.location }
// //       //    }} />
// //     );
// //   }
// // }

// // export default LoginPage;
