import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import webAuth from './authConfig';

const Profile = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  //   const handleAuth = () =>
  //     new Promise((resolve, reject) => {
  //       webAuth.parseHash(
  //         {
  //           state: 'xyzABC123',
  //           hash: window.location.hash,
  //         },
  //         (err, authResult) => {
  //           console.log('parseHash');
  //           console.log(authResult);
  //           if (authResult && authResult.accessToken && authResult.idToken) {
  //             console.log('resolved');
  //             resolve(authResult);
  //           } else if (err) {
  //             console.log('error occurred');
  //             console.log(err);
  //             reject(err);
  //           }
  //         }
  //       );
  //     });
  //   useEffect(() => {
  //     handleAuth()
  //       .then((res) => console.log(res))
  //       .catch((e) => console.log(e));
  //     //     webAuth.parseHash(
  //     //       { hash: window.location.hash },
  //     //       function (err, authResult) {
  //     //         if (err) {
  //     //           return console.log(err);
  //     //         }
  //     //         console.log('====================================');
  //     //         console.log(user);
  //     //         console.log('====================================');
  //     //         // The contents of authResult depend on which authentication parameters were used.
  //     //         // It can include the following:
  //     //         // authResult.accessToken - access token for the API specified by `audience`
  //     //         // authResult.expiresIn - string with the access token's expiration time in seconds
  //     //         // authResult.idToken - ID token JWT containing user profile information
  //     //         //     webAuth.client.userInfo(authResult.accessToken, function (err, user) {
  //     //         //       // Now you have the user's information
  //     //         //       console.log('====================================');
  //     //         //       console.log(user);
  //     //         //       console.log('====================================');
  //     //         //       setUser();
  //     //         //     });
  //     //       }
  //     //     );
  //   }, []);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    } else {
      //  navigate('/login');
    }
  }, []);
  return (
    <>
      <div className="text-center">
        <p>
          your email is {user?.email_verified ? 'verified' : 'not verified'}
        </p>
        <img className="m-auto" src={user?.picture} alt={user?.name} />
        <h2>{user?.nickname}</h2>
        <p>{user?.email}</p>
      </div>
    </>
  );
};

export default Profile;
