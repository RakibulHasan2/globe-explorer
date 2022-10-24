import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Home/Home';

function App() { 
  const router  = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'shop',
          element: <div>shop</div>
        },
        {
          path: 'packages',
          element: <div>packages</div>
        },
        {
          path: 'login',
          element: <div>Login</div>
        }
      ]
    }
  ])
  return (
    <div className="App">
    <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
