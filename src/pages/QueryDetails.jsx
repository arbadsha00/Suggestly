import axios from "axios";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { FaCommentAlt, FaUserCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { IoIosTime } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../provider/AuthContext";
import { Helmet } from "react-helmet-async";

const QueryDetails = () => {
  const [recData, setRecData] = useState([]);

  const queryData = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    product,
    brand,
    img,
    queryTitle,
    reason,
    userName,
    userEmail,
    userImg,
    date,
    _id,
  } = queryData;

  useEffect(() => {
    axios
      .get(`https://suggestly-server.vercel.app/recommendations/${_id}`)
      .then((res) => setRecData(res.data));
  }, [_id, recData]);
  const handleAddRec = (e) => {
    e.preventDefault();
    const recProduct = e.target.recProduct.value;
    const recBrand = e.target.recBrand.value;
    const recImg = e.target.recImg.value;
    const recTitle = e.target.recTitle.value;
    const recReason = e.target.recReason.value;
    const recUserName = user?.displayName;
    const recUserEmail = user?.email;
    const recDate = new Date().toISOString();

    const newRec = {
      recProduct,
      recBrand,
      recImg,
      recTitle,
      recReason,
      recUserName,
      recUserEmail,
      queryId: _id,
      queryTitle,
      product,
      userEmail,
      userName,
      recDate,
    };

    axios
      .post("https://suggestly-server.vercel.app/recommendations", newRec)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Query added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Details | Suggestly</title>
      </Helmet>
      <h1 className="text-center text-primary text-4xl font-bold ">
        Query Details
      </h1>
      <p className="md:w-3/4 mx-auto text-center mt-2 mb-6">
        Detailed Insights into the Query
      </p>
      <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-3 max-w-5xl">
        <div className="flex flex-col max-w-[300px] mx-auto    items-center  bg-base-100 shadow-xl  overflow-hidden">
          <figure>
            <img
              src={img}
              className="w-[300px]  h-[200px] object-cover"
              alt=""
            />
          </figure>
          <div className="p-4 space-y-2   ">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{product}</h2>
              <p className="text-xs bg-primary-2 w-fit py-1 rounded-full px-2">
                {brand}
              </p>
            </div>
            <div className="flex justify-between items-center  text-secondary-2 text-sm">
              <p className="flex items-center gap-1 ">
                <img
                  src={userImg}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                  alt=""
                />{" "}
                {userName}
              </p>
              <p className="flex items-center gap-1 ">
                <IoIosTime /> {format(date, "d-M-yy")}
              </p>
            </div>
            <p className="text-lg font-semibold text-secondary-2">
              {queryTitle}
            </p>

            <p className="text-gray-500 ">
              <GoXCircleFill className="inline mr-1" />
              {reason}
            </p>
          </div>
        </div>
        <div className=" max-w-[300px] md:max-w-none mx-auto md:mx-0   md:col-span-2  py-6 bg-base-200   flex flex-col items-center gap-1   shadow-xl">
          <h3 className=" font-bold text-center text-3xl text-primary">
            Add Recommendation
          </h3>

          <form
            onSubmit={handleAddRec}
            className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 px-6"
          >
            <div className="form-control ">
              <label className="label ">
                <span className="label-text  font-semibold">Product Name</span>
              </label>
              <input
                name="recProduct"
                type="text"
                placeholder="ex: iPhone 16"
                className="input input-bordered "
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Product Brand</span>
              </label>
              <input
                name="recBrand"
                type="text"
                placeholder="ex: Apple"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label ">
                <span className="label-text  font-semibold">
                  Recommendation TItle
                </span>
              </label>
              <input
                name="recTitle"
                type="text"
                placeholder="ex:Best alternative
          "
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control ">
              <label className="label ">
                <span className="label-text  font-semibold">
                  Product Image-URL
                </span>
              </label>
              <input
                name="recImg"
                type="text"
                placeholder="image link"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold">
                  Recommendation reason
                </span>
              </label>
              <textarea
                name="recReason"
                placeholder="ex: BudgetFriendly"
                className="textarea textarea-bordered"
                required
              ></textarea>
            </div>

            <button className="md:col-span-2 text-xl btn border-none bg-primary hover:bg-secondary text-white">
              Add Recommendation
            </button>
          </form>
        </div>
      </div>

      <section className="space-y-3 max-w-5xl mx-auto">
        <h1 className="font-semibold text-2xl mt-6">All Recommendations</h1>
        {recData.map((item) => (
          <div
            className="flex justify-between items-center  rounded-xl bg-blue-50 p-2 "
            key={item._id}
          >
            <div className="flex items-center gap-3">
              <img className="w-24 rounded-l-xl" src={item.recImg} alt="" />
              <div>
                <h1 className="font-semibold text-xl text-secondary-2 ">
                  {item.recProduct}
                </h1>
                <div className="md:flex gap-5 text-xs text-blue-300">
                  <p className="flex items-center gap-1 ">
                    <FaUserCircle /> {userName}
                  </p>
                  <p className="flex items-center gap-1 ">
                    <IoIosTime /> {format(date, "d-M-yy")}
                  </p>
                </div>
                <h3>{item.recTitle}</h3>
                <p className="text-xs text-gray-500">{item.recReason}</p>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default QueryDetails;
