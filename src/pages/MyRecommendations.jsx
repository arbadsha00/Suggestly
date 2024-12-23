import React, { useContext, useState } from "react";

const MyRecommendations = () => {
    const [data, setData] = useState();
    return <div className="container mx-auto p-4">
      <h1 className="text-center text-primary text-4xl font-bold">
      Explore Your Best Options
      </h1>
      <p className="md:w-3/4 mx-auto text-center my-2">
        Choose the plan that best fits your needs. Upgrade anytime!
      </p>
  </div>;
};

export default MyRecommendations;
