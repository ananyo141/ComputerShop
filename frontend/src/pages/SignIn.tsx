import React from "react";
import { IconContext } from "react-icons";

import { BiLock } from "react-icons/bi";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <div className="flex">
      {/* Unsplash Image Only half of the viewport */}
      <img
        src="https://source.unsplash.com/random"
        className="w-1/2 h-screen"
        alt="canvas image"
      />
      {/* SignIn Form Section */}
      <div className="flex font-medium flex-col w-full justify-center items-center">
        {/* Icon */}
        <div className="p-4 bg-purple-700 rounded-full">
          <IconContext.Provider value={{ color: "white", size: "32" }}>
            <BiLock />
          </IconContext.Provider>
        </div>
        <label className="text-black text-2xl tracking-tighter font-light">
          Sign In
        </label>

        {/* Form Fields */}
        <form
          action="#"
          className="p-4 w-full flex flex-col gap-4"
          method="POST"
        >
          <input
            type="email"
            required
            className="p-3 border"
            placeholder="Email Address *"
          />
          <input
            type="password"
            required
            className="p-3 border"
            placeholder="Password *"
          />
          <div className="ml-2">
            <span>Remember Me</span>
            <input type="checkbox" className="ml-3 bg-gray-200 border" />
          </div>
          <input
            type="submit"
            value="sign in"
            className="rounded py-1 bg-blue-400 shadow-xl text-white uppercase"
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
