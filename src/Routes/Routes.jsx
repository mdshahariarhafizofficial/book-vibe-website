import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ERROR/ErrorPage';

const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      children: [
        { 
            index: true,
            loader: ()=> fetch('booksData.json') ,
            path: '/', 
            Component:Home 
        }
      ],
      errorElement: <ErrorPage></ErrorPage>,
    }
]);

export default router;