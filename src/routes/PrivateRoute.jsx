import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../provider/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <span className="loading loading-infinity min-h-screen loading-lg mx-auto block"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
