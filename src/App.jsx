import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './home';
import Slideshow from './slideshow';

const router = createBrowserRouter([
{
  path: '/',
  children: [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/slideshow',
    element: <Slideshow/>,
  },

]}
  
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App





