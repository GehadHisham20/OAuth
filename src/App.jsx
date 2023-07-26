import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import './App.css';
import Login from './login';
import ErrorPage from './Error';
import Profile from './profile';
import Home from './home';

const router = createHashRouter([
  {
    path: '/OAuth',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/OAuth/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/OAuth/profile',
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
