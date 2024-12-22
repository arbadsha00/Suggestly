import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/card";

const Queries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [gridCols, setGridCols] = useState(3);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/queries?search=${searchText}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, [searchText]);

  if (loading) {
    return (
      <span className="loading loading-infinity min-h-screen loading-lg mx-auto block"></span>
    );
  }
  return (
    <div className="mt-6 mb-16 ">
      <h1 className="text-center text-primary text-4xl font-bold">
        Explore Product Queries
      </h1>
      <p className="md:w-3/4 mx-auto text-center my-2">
        Browse user queries for better product choices and recommendations.
      </p>
      <div className="flex justify-center items-center gap-2 my-4">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input bg-gray-200 w-52 md:w-80"
        />
        <button className="btn bg-primary text-white hover:bg-secondary">
          Search
        </button>
      </div>
      <div className="hidden md:flex justify-center join my-6">
        <button
          className={`btn btn-sm join-item ${
            gridCols === 1 ? "bg-primary text-white hover:bg-secondary" : ""
          }`}
          onClick={() => setGridCols(1)}
        >
          1
        </button>
        <button
          className={`btn  btn-sm  join-item ${
            gridCols === 2 ? "bg-primary text-white hover:bg-secondary" : ""
          }`}
          onClick={() => setGridCols(2)}
        >
          2
        </button>
        <button
          className={`hidden lg:flex btn btn-sm join-item ${
            gridCols === 3 ? "bg-primary text-white hover:bg-secondary" : ""
          }`}
          onClick={() => setGridCols(3)}
        >
          3
        </button>
      </div>
      <section
        className={`grid grid-cols-1 md:grid-cols-${
          gridCols === 3 ? "2" : gridCols
        } lg:grid-cols-${gridCols} gap-6 lg:gap-10 my-10 max-w-5xl mx-auto`}
      >
        {data.map((item) => (
          <Card {...item} key={item._id}></Card>
        ))}
      </section>
    </div>
  );
};

export default Queries;
