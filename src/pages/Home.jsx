import React from "react";
import Banner from "../components/Banner";
import LandingQueries from "../components/LandingQueries";
import Pricing from "../components/Pricing";
import Reviews from "../components/Reviews";
import { Helmet } from "react-helmet-async";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="container mx-auto p-4 ">
      <Helmet>
        <title>Home | Suggestly</title>
      </Helmet>
      <Banner></Banner>
      <LandingQueries></LandingQueries>
      <Pricing></Pricing>
      <NewsLetter></NewsLetter>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
