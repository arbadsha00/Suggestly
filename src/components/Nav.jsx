import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Tooltip } from "react-tooltip";
import { TbMenu2 } from "react-icons/tb";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " text-white text-base font-semibold bg-secondary-2 "
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
              ? " text-white text-base font-semibold bg-secondary-2 "
              : " text-secondary-2 text-base "
          }
          to="/queries"
        >
          Queries
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="p-2  bg-base-100/75 container  mx-auto    sticky top-0 z-40  backdrop-blur ">
      <Tooltip id="my-tooltip" />

      <div className="navbar flex justify-between">
        <div className="navbar-start">
          <div className="flex gap-2 items-center ">
            <img src={logo} alt="" />
            <span className="text-2xl font-bold hidden md:flex ">
              Suggestly
            </span>
          </div>
        </div>

        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className="text-xl btn border-none bg-primary text-white hover:bg-secondary"
          >
            Login
          </Link>

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
              className="menu menu-md    -mr-10 dropdown-content  rounded-box z-[1] mt-14 w-60 p-4 bg-base-300  shadow"
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
