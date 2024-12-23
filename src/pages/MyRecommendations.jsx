import React, { useEffect, useState } from "react";
import { useContext } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import AuthContext from "../provider/AuthContext";
import { format } from "date-fns";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import found from "../assets/found.webp"
const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`myRecommendations/user/${user?.email}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [user?.email, axiosSecure, data]);

  const handleDelete = (id,queryId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4F52FF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/recommendations/${id}?queryId=${queryId}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted",
              text: "Product deleted successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        });
      }
    });
  };

  if (loading) {
    return (
      <span className="loading loading-infinity min-h-screen loading-lg mx-auto block"></span>
    );
  }

  return (
    <div className="container mx-auto p-4">
       <Helmet>
              <title>MyRecommendations | Suggestly</title>
            </Helmet>
      <h1 className="text-center text-primary text-4xl font-bold">
        My Product Recommendations
      </h1>
      <p className="md:w-3/4 mx-auto text-center my-2">
        Mange all the recommendations you’ve made
      </p>
      {data.length ? <div className="overflow-x-auto my-6 max-w-4xl mx-auto">
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
              <th></th>
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
                <td><button onClick={()=>handleDelete(item._id,item.queryId)} className="btn  btn-xs md:btn-sm bg-red-500 text-white"> <MdDeleteForever className="text-xl" /> </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> : <div>
          <img className="mx-auto" src={found} alt="" />
          <h1 className="text-center  text-primary text-4xl font-bold -mt-20 mb-10">
            No Recommendation Found!
          </h1>
        </div>}
      
    </div>
  );
};

export default MyRecommendations;
