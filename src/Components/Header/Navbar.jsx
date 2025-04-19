import React from "react";
import logo from '../../assets/banner-book.png'
import { NavLink } from "react-router";

const Navbar = () => {
    const menuItem = <>
            <NavLink className='px-5 py-2 mr-5 text-lg font-medium' to="/">
                Home
            </NavLink>
            <NavLink className='px-5 py-2 mr-5 text-lg font-medium' to="/listedbooks">
              Listed Books
            </NavLink>
            <NavLink className='px-5 py-2 mr-5 text-lg font-medium' to="/pagestoread">
            Pages to Read
            </NavLink>
    </>;
  return (
    <div className="navbar py-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
                {
                    menuItem
                }
          </ul>
        </div>
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img className="w-10" src={logo} alt="" />
            <a className="text-4xl font-bold">Book Vibe</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {
                menuItem
            }
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a> 
      </div>
    </div>
  );
};

export default Navbar;
