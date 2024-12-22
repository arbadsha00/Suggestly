import React from 'react';
import Banner from '../components/Banner';
import LandingQueries from '../components/LandingQueries';

const Home = () => {
    return (
        <div className='container mx-auto p-4 '>
            <Banner></Banner>
            <LandingQueries></LandingQueries>
        </div>
    );
};

export default Home;