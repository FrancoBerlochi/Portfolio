import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([{ path: "/", element:<HomePage></HomePage> },]);

const App = ()=> {
  return (
      <div>
        {<RouterProvider router={router}/>}
      </div>
    )
}

export default App;
