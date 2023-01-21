import React from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartFill, BsFillBellFill } from "react-icons/bs";

import { CartStorageObjectType } from "../models/CartItem";

import NavItems from "../data/NavItems";

type Props = {
  cartAmount: number;
};

const Navbar = ({ cartAmount }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed z-50 flex w-full flex-wrap items-center justify-between bg-gray-900 py-4 text-gray-200 shadow-lg">
      <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
        <button
          className="navbar-toggler border-0 bg-transparent py-2 px-2.5 text-gray-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0"
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
          className="navbar-collapse collapse flex-grow items-center"
          id="navbarSupportedContent1"
        >
          <Link className="pr-2 text-xl font-semibold text-white" to="/">
            ComputerShop
          </Link>
          {/* Left links */}
          <ul className="navbar-nav list-style-none mr-auto flex flex-col pl-0">
            {NavItems.map((obj, i) => (
              <li key={i} className="nav-item p-2">
                <Link to={obj.path}>{obj.name}</Link>
              </li>
            ))}
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/*  Collapsible wrapper */}

        {/* Right elements */}
        <div className="relative flex items-center">
          {/* Icon */}
          <Link
            to="/cart"
            className="mr-4 text-white opacity-60 hover:opacity-80 focus:opacity-80"
          >
            <BsFillCartFill className="scale-125" />
            <span className="absolute top-0 left-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white">
              {cartAmount}
            </span>
          </Link>
          <div className="dropdown relative">
            <a
              className="dropdown-toggle hidden-arrow mr-4 flex items-center text-white opacity-60 hover:opacity-80 focus:opacity-80"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsFillBellFill className="scale-125" />
              <span className="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white">
                1
              </span>
            </a>
            <ul
              className="dropdown-menu absolute left-auto right-0 z-50 float-left m-0 mt-1 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <Link
                  className="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                  to=""
                >
                  Previous Orders
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown relative">
            <a
              className="dropdown-toggle hidden-arrow flex items-center"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                className="h-[25px] w-[25px] rounded-full"
                alt=""
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu absolute left-auto right-0 z-50 float-left m-0 mt-1 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <Link
                  className="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                  to="/signin"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                  to="/contact"
                >
                  Contact
                </Link>
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
