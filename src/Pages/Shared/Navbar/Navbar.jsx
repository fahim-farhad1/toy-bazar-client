import React, { useContext } from "react";
import Logo from "../../../assets/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then((result ) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allToys"
                className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mytoys"
                className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }
              >
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addatoy"
                className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }
              >
                Add A Toy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="h-10 w-22" src={Logo} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex space-x-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " font-bold text-orange-600 border-b border-orange-700"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allToys"
              className={({ isActive }) =>
                isActive
                  ? " font-bold text-orange-600 border-b border-orange-700"
                  : ""
              }
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mytoys"
              className={({ isActive }) =>
                isActive
                  ? " font-bold text-orange-600 border-b border-orange-700"
                  : ""
              }
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addatoy"
              className={({ isActive }) =>
                isActive
                  ? " font-bold text-orange-600 border-b border-orange-700"
                  : ""
              }
            >
              Add A Toy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? " font-bold text-orange-600 border-b border-orange-700"
                  : ""
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <img className="h-12 w-12 rounded-3xl  mr-3" src={user.photoURL} />
        )}
        {user ? (
          <button onClick={handelLogOut} className="btn  bg-orange-600 hover:bg-orange-700 ">
            Logout
          </button>
        ) : (
          <Link to="/login" className="mr-5">
            <button className="btn btn-outline bg-orange-600 hover:bg-orange-700 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
