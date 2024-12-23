// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../provider/AuthContext";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const location = useLocation();
  const redirectTo =
    location.state?.from === "/login" ? "/home" : location.state?.from || "/";
  const { signIn, setLoading, googleSignIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // console.log(email, password);
    signIn(email, password)
      .then(() => {
        toast.success("Login Successful");
        Navigate(redirectTo, { replace: true });
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
        Navigate(redirectTo, { replace: true });
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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <Helmet>
        <title>Login | Suggestly</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-32">
        <h1 className="text-3xl font-semibold text-center mt-8 pb-3">
          Login your account
        </h1>
        <div className="divider"></div>
        <form onSubmit={handleLogin} className="card-body pt-3 pb-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input bg-base-200"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input bg-base-200"
              required
            />
          </div>

          <div className="form-control mt-2">
            <button className="text-xl btn border-none bg-primary text-slate-100 hover:bg-secondary">
              Login
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
          Dont’t Have An Account ?{" "}
          <Link className="text-primary font-semibold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
