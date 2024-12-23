import { useContext, useEffect, useState } from "react";
import AuthContext from "../provider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateQueries = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axios
      .get(`https://suggestly-server.vercel.app/queries/${id}`)
      .then((res) => setSingleData(res.data));
  }, [id, singleData]);

  const {
    product,
    brand,
    img,
    queryTitle,
    reason,
    recCount,
    userName,
    userEmail,
    userImg,
  } = singleData;
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const product = e.target.product.value;
    const brand = e.target.brand.value;
    const img = e.target.img.value;
    const queryTitle = e.target.queryTitle.value;
    const reason = e.target.reason.value;

    const date = new Date().toISOString();

    const newQuery = {
      product,
      brand,
      img,
      queryTitle,
      reason,
      userName,
      userEmail,
      userImg,
      date,
      recCount: Number(recCount),
    };

    axiosSecure.put(`queries/${id}`, newQuery).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Success!",
          text: "Query Updated successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        e.target.reset();
      }
    });
  };
  return (
    <div className="mx-auto  py-6 bg-base-200  rounded-xl flex flex-col items-center gap-6 my-6 max-w-2xl shadow-xl">
      <Helmet>
        <title>Update Query | Suggestly</title>
      </Helmet>
      <h3 className=" font-bold text-3xl text-primary">Update Query</h3>

      <form
        onSubmit={handleUpdateProduct}
        className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 px-6"
      >
        <p className="font-semibold">UserName : {userName}</p>
        <p className="font-semibold">UserEmail : {userEmail}</p>

        <div className="form-control ">
          <label className="label ">
            <span className="label-text  font-semibold">Product Name</span>
          </label>
          <input
            defaultValue={product}
            name="product"
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
            defaultValue={brand}
            name="brand"
            type="text"
            placeholder="ex: Apple"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text  font-semibold">Query TItle</span>
          </label>
          <input
            defaultValue={queryTitle}
            name="queryTitle"
            type="text"
            placeholder="ex: Has it the best quality? 
        "
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text  font-semibold">Product Image-URL</span>
          </label>
          <input
            defaultValue={img}
            name="img"
            type="text"
            placeholder="image link"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text font-semibold">
              Boycotting Reason Details
            </span>
          </label>
          <textarea
            defaultValue={reason}
            name="reason"
            placeholder="ex: Expensive"
            className="textarea textarea-bordered"
            required
          ></textarea>
        </div>

        <button className="md:col-span-2 text-xl btn border-none bg-primary hover:bg-secondary text-white">
          Update Query
        </button>
      </form>
    </div>
  );
};

export default UpdateQueries;
