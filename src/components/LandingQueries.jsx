import { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";

const LandingQueries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:3000/queries`).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <span className="loading loading-infinity min-h-screen loading-lg mx-auto block"></span>
    );
  }
  return (
    <div className="my-10">
      <h1 className="text-center text-primary text-4xl font-bold">
        Find Better Alternatives
      </h1>
      <p className="md:w-3/4 mx-auto text-center my-2">
        Explore product queries, suggestions, and recommendations.
      </p>

      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 my-6 max-w-5xl mx-auto">
        {data.slice(0,6).map((item) => (
          <Card {...item} key={item._id}></Card>
        ))}
      </section>
    </div>
  );
};

export default LandingQueries;
