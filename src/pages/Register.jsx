import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../provider/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, update, setLoading, googleSignIn } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    // console.log(name, photo, email, password);
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    // create user
    createUser(email, password)
      .then(() => {
        toast.success("Registration Successful");
        update({ displayName: name, photoURL: photo }).then(() => {
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((err) => {
        const errorMessage = err.message;
        const extractedMessage = errorMessage
          .split("(")[1]
          ?.split(")")[0]
          ?.replace("auth/", "")
          .replace("-", " ");
        toast.error(extractedMessage);
      });
  };
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        const errorMessage = err.message;
        const extractedMessage = errorMessage
          .split("(")[1]
          ?.split(")")[0]
          ?.replace("auth/", "")
          .replace("-", " ");
        toast.error(extractedMessage);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Register | EquiSports</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-16">
        <h1 className="text-3xl font-semibold text-center mt-8 pb-3">
          Register your account
        </h1>
        <div className="divider"></div>
        <form onSubmit={handleRegister} className="card-body pt-3 pb-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input bg-base-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo Url</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo Url"
              className="input bg-base-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input bg-base-200"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input bg-base-200"
              required
            />
            <span
              className="absolute right-3 top-12 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>

          <div className="form-control">
            <button className="text-xl btn border-none bg-primary hover:bg-secondary text-slate-100">
              Register
            </button>
          </div>
        </form>
        <button
          onClick={handleGoogle}
          className="mx-8 btn border-none bg-secondary-2 text-slate-100"
        >
          Continue with <FcGoogle /> Google
        </button>
        <p className="text-center text-sm py-2 text-gray-500">
          Already Have An Account ?
          <Link className="text-primary font-semibold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
