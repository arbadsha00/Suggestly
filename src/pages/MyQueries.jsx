import { useContext, useEffect, useState } from "react";
import banner from "../assets/banner-01.jpg";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import AuthContext from "../provider/AuthContext";
import found from "../assets/found.webp";

import { FaCommentAlt, FaEye } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { format } from "date-fns";

import Swal from "sweetalert2";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "axios";
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
  }, [user?.email, axiosSecure, data]);

  const handleDelete = (id) => {
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
        axios.delete(`http://localhost:3000/queries/${id}`).then((res) => {
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
        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 my-6 max-w-5xl mx-auto">
          {data.slice(0, 6).map((item) => (
            <div
              key={item._id}
              className="card mx-auto card-compact bg-base-100 w-[300px] shadow-xl flex flex-col justify-between"
            >
              <figure>
                <img
                  src={item.img}
                  className="w-[300px] h-[200px] object-cover"
                  alt=""
                />
              </figure>
              <div className="p-4 space-y-2   ">
                <h2 className="text-2xl font-bold">{item.product}</h2>
                <div className="flex justify-between items-center w-full text-primary-2 text-sm">
                  <p className="flex items-center gap-1 ">
                    <IoIosTime /> {format(item.date, "d-M-yy")}
                  </p>
                  <p className="flex items-center gap-1 ">
                    <FaCommentAlt /> {item.recCount}
                  </p>
                </div>
                <p className="text-lg font-semibold text-secondary-2">
                  {item.queryTitle}
                </p>

                <div className="flex justify-between items-center w-full">
                  <button
                    onClick={() => navigate(`/queryDetails/${item._id}`)}
                    className="btn  btn-sm text-xl bg-primary text-white hover:bg-secondary "
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => navigate(`/updateQueries/${item._id}`)}
                    className="btn btn-sm bg-secondary text-white hover:bg-primary"
                  >
                    <MdEdit className="text-xl" />
                  </button>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-secondary-2 "
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
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
