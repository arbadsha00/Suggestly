import React from "react";
import Banner from "../components/Banner";
import LandingQueries from "../components/LandingQueries";
import Pricing from "../components/Pricing";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div className="container mx-auto p-4 ">
      <Banner></Banner>
      <LandingQueries></LandingQueries>
      <Pricing></Pricing>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
