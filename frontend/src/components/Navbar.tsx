import React from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartFill, BsFillBellFill } from "react-icons/bs";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu className="scale-150" />
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent1"
        >
          <a className="text-xl text-white pr-2 font-semibold" href="#">
            Computer Shop
          </a>
          {/* Left links */}
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="nav-item p-2">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/*  Collapsible wrapper */}

        {/* Right elements */}
        <div className="flex items-center relative">
          {/* Icon */}
          <a
            className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
            href="#"
          >
            <BsFillCartFill className="scale-125" />
          </a>
          <div className="dropdown relative">
            <a
              className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsFillBellFill className="scale-125" />
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                1
              </span>
            </a>
            <ul
              className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown relative">
            <a
              className="dropdown-toggle flex items-center hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                className="rounded-full h-[25px] w-[25px]"
                alt=""
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
    </nav>
  );
};

export default Navbar;
