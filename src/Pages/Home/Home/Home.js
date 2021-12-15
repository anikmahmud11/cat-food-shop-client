import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import Products from '../Porducts/Products';
import Review from '../Review/Review';


const Home = () => {
    return (
        <>
           <Banner></Banner> 
           <Products></Products>
           <Banner2></Banner2>
           <Review></Review>
       </>
    );

};

export default Home;