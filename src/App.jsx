import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProyectsDetails from './pages/ProyectDetails';

const router = createBrowserRouter([{ path: "/", element:<HomePage></HomePage> }, { path:"/:id", element:<ProyectsDetails></ProyectsDetails>}]);

const App = ()=> {
  return (
      <div>
        {<RouterProvider router={router}/>}
      </div>
    )
}

export default App;
