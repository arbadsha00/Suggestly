import React from 'react';
import Banner from '../components/Banner';
import LandingQueries from '../components/LandingQueries';
import Pricing from '../components/Pricing';

const Home = () => {
    return (
        <div className='container mx-auto p-4 '>
            <Banner></Banner>
            <LandingQueries></LandingQueries>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;