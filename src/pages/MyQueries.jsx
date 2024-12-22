import React, { useContext, useEffect, useState } from "react";
import banner from "../assets/banner-01.jpg";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import AuthContext from "../provider/AuthContext";
import found from "../assets/found.webp";
const MyQueries = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`queries/user/${user?.email}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [user?.email, axiosSecure]);
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center">
        <img src={banner} className="lg:w-3/4 mx-auto" alt="" />
        <button
          onClick={() => navigate("/addQueries")}
          className="btn btn-sm md:text-lg md:btn-md lg:w-40 bg-primary hover:bg-secondary text-white"
        >
          <IoIosAddCircle className="text-xl md:text-2xl" /> Add Query
        </button>
      </div>

      {data.length ? (
        <section>y</section>
      ) : (
        <div>
          <img className="mx-auto" src={found} alt="" />
          <h1 className="text-center  text-primary text-4xl font-bold -mt-20 mb-10">
            No Query Found!
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyQueries;
