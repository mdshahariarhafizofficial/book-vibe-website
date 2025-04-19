import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ERROR/ErrorPage';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';
import BookDetails from '../Pages/BookDetails/BookDetails';

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
        },
        {
          path: 'listedbooks',
          Component: ListedBooks
        },
        {
          path: '/bookdetails/:id',
          loader: ()=> fetch('booksData.json') ,
          Component: BookDetails
        }
      ],
      errorElement: <ErrorPage></ErrorPage>,
    }
]);

export default router;