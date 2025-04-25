import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../../Components/Books/Books';
import { useLoaderData } from 'react-router';
import DynamicTitle from '../../Components/Dynamic Title/DynamicTitle';

const Home = () => {
    const booksData = useLoaderData();    
    return (
        <div>
            <DynamicTitle></DynamicTitle>
          <Banner></Banner>
          <Books 
            booksData={booksData}></Books>
        </div>
    );
};

export default Home;