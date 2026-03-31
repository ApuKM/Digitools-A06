import React from "react";
import cartIcon from "../assets/products/shopping-cart.png";

const Navbar = () => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-[#101727]/90 text-base gap-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <details>
                <summary>Features</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li>
                    <a>Feature 1</a>
                  </li>
                  <li>
                    <a>Feature 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <img src={cartIcon} alt="CartIcon" className="w-5 h-5"/>
          <a className="btn btn-ghost text-base font-semibold text-[#101727]/90 hidden md:flex items-center">
            Login
          </a>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold text-base text-white rounded-full hidden md:flex items-center">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
