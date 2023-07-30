import { useAuth0 } from '@auth0/auth0-react';

{
  /* using default oAuth login */
}
export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
}
