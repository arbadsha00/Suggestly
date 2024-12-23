import React, { useEffect, useState } from "react";
import { useContext } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import AuthContext from "../provider/AuthContext";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";
import found from "../assets/found.webp";
const Recommendations = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`recommendations/user/${user?.email}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [user?.email, axiosSecure, data]);
  if (loading) {
    return (
      <span className="loading loading-infinity min-h-screen loading-lg mx-auto block"></span>
    );
  }
  return (
    <div className="container mx-auto p-4 ">
      <Helmet>
        <title>Recommendations | Suggestly</title>
      </Helmet>
      <h1 className="text-center text-primary text-4xl font-bold">
        Explore Your Best Options
      </h1>
      <p className="md:w-3/4 mx-auto text-center my-2">
        Discover Products That Match Your Preferences
      </p>
      {data.length ? (
        <div className="overflow-x-auto my-6 max-w-4xl mx-auto">
          <table className="table text-xs md:text-base  table-zebra ">
            <thead className="bg-primary text-white text-base rounded-xl">
              <tr>
                <th></th>
                <th>
                  <span className="hidden md:inline">Recommended</span> Products
                </th>
                <th>
                  <span className="hidden md:inline">Recommended</span> Brands
                </th>
                <th>
                  Query <span className="hidden md:inline ">Products</span>{" "}
                </th>
                <th>
                  Date <span className="hidden md:inline">Added</span>{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>{item.recProduct}</td>
                  <td>{item.recBrand}</td>
                  <td>{item.product}</td>
                  <td>{format(item.recDate, "d-M-yy")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <img className="mx-auto" src={found} alt="" />
          <h1 className="text-center  text-primary text-4xl font-bold -mt-20 mb-10">
            No Recommendation Found!
          </h1>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
