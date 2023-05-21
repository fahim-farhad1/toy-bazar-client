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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 mr-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
        {user ? (
          <button onClick={handelLogOut} className="btn">
            Logout
          </button>
        ) : (
          <Link to="/login" className="mr-5">
            <button className="btn btn-outline bg-orange-600 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
