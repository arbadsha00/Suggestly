import { useNavigate } from "react-router-dom";
import error from "../assets/404.png";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-3">
      <img src={error} alt="" />
      <button
        onClick={() => navigate("/")}
        className="btn md:text-xl btn-sm md:btn-md  bg-primary border-none text-slate-100 pointer-events-auto "
      >
        Return Home
      </button>
    </div>
  );
};

export default Error;
