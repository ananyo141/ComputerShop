import React from "react";

import FooterIcons from "../data/FooterIcons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-8 h-[150px] bg-gray-900 text-center text-white">
      <div className="px-6 pt-6">
        <div className="mb-6 flex justify-center">
          {FooterIcons.map((obj, i) => (
            <a
              key={`Footer${i}`}
              href="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            >
              <obj.icon className="mx-auto h-full w-3" />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-[rgba(0,0,0,0.2)] p-4 text-center">
        © 2023 Copyright:
        <a className="px-2" target="_blank" href="https://ananyo141.github.io/">
          Ananyobrata Pal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
