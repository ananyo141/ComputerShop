import React from "react";

import FooterIcons from "../data/FooterIcons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-8 h-[150px] text-center bg-gray-900 text-white">
      <div className="px-6 pt-6">
        <div className="flex justify-center mb-6">
          {FooterIcons.map((obj, i) => (
            <a
              key={i}
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <obj.icon className="w-3 h-full mx-auto" />
            </a>
          ))}
        </div>
      </div>

      <div className="text-center p-4 bg-[rgba(0,0,0,0.2)]">
        © 2023 Copyright:
        <a className="px-2" target="_blank" href="https://ananyo141.github.io/">
          Ananyobrata Pal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
