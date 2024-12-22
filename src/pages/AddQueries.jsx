import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddQueries = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = e.target.product.value;
    const brand = e.target.brand.value;
    const img = e.target.img.value;
    const queryTitle = e.target.queryTitle.value;
    const reason = e.target.reason.value;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userImg = user?.photoURL || "";
    const date =  new Date().toISOString();

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
      recCount: Number(0),
    };

    console.log(newQuery);
  };
  return (
    <div className="mx-auto  py-6 bg-base-200  rounded-xl flex flex-col items-center gap-6 my-6 max-w-2xl shadow-xl">
      <Helmet>
        <title>Add Query | Suggestly</title>
      </Helmet>
      <h3 className=" font-bold text-3xl text-primary">Add New Query</h3>

      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 px-6"
      >
        <p className="font-semibold">UserName : {user?.displayName}</p>
        <p className="font-semibold">UserEmail : {user?.email}</p>

        <div className="form-control ">
          <label className="label ">
            <span className="label-text  font-semibold">Product Name</span>
          </label>
          <input
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
            name="reason"
            placeholder="ex: Expensive"
            className="textarea textarea-bordered"
            required
          ></textarea>
        </div>

        <button className="md:col-span-2 text-xl btn border-none bg-primary hover:bg-secondary text-white">
          Add Query
        </button>
      </form>
    </div>
  );
};

export default AddQueries;
