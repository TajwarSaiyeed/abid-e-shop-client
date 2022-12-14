import React from "react";
import { Link } from "react-router-dom";

const menuItems = (
  <>
    <li>
      <Link to="/" className="btn btn-ghost btn-md">
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/login"
        className="btn bg-pink-500 text-white hover:text-pink-500 hover:bg-white border-none rounded-lg lg:w-40"
      >
        Login
      </Link>
    </li>
    <li>
      <Link
        to="/signup"
        className="btn bg-pink-500 text-white hover:text-pink-500 hover:bg-white border-none rounded-lg lg:w-22"
      >
        Signup
      </Link>
    </li>
  </>
);

const Navbar = () => {
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
            {menuItems}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Abid-E-Shop
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
