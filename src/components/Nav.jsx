import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Tooltip } from "react-tooltip";
import { TbMenu2 } from "react-icons/tb";
import { useContext } from "react";
import AuthContext from "../provider/AuthContext";

const Nav = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  // menu-item
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "  text-base font-semibold  border-b-4 border-primary rounded-none "
              : " text-secondary-2 text-base"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " text-base font-semibold  border-b-4 border-primary rounded-none "
              : " text-secondary-2 text-base "
          }
          to="/queries"
        >
          Queries
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-base font-semibold  border-b-4 border-primary rounded-none "
                  : " text-secondary-2 text-base "
              }
              to="/recommendations"
            >
              Recommendations For Me
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-base font-semibold  border-b-4 border-primary rounded-none "
                  : " text-secondary-2 text-base "
              }
              to="/myQueries"
            >
              My Queries
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-base font-semibold  border-b-4 border-primary rounded-none "
                  : " text-secondary-2 text-base "
              }
              to="/myRecommendations"
            >
              My Recommendations
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " text-base font-semibold  border-b-4 border-primary rounded-none "
              : " text-secondary-2 text-base "
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="p-2  bg-base-100/75 container  mx-auto    sticky top-0 z-40  backdrop-blur ">
      <Tooltip id="my-tooltip" />

      <div className="navbar flex justify-between">
        <div className="navbar-start">
          <Link to="/" className="flex gap-2 items-center ">
            <img src={logo} alt="" />
            <span className="text-2xl font-bold hidden md:flex ">
              Suggestly
            </span>
          </Link>
        </div>

        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {!loading ? (
            user ? (
              <div
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                className="tooltip "
              >
                <button
                  onClick={() => logOut()}
                  className="text-xl btn border-none bg-primary text-slate-100 rounded-full pl-1 min-w-fit  hover:bg-secondary"
                >
                  <img
                    src={user?.photoURL}
                    className="w-[40px] h-[40px] rounded-full"
                    alt=""
                  />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-xl btn border-none bg-primary hover:bg-secondary text-slate-100 "
              >
                Login
              </Link>
            )
          ) : (
            <span className="loading loading-ring loading-lg  "></span>
          )}

          <div className="dropdown dropdown-left  ">
            <div
              tabIndex={0}
              role="button"
              className="ml-3 text-xl hover:text-primary lg:hidden"
            >
              <TbMenu2 />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md    -mr-10 dropdown-content  rounded-box z-[1] mt-14 w-64 p-4 bg-base-300  shadow"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
