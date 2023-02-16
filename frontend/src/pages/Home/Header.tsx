import React from "react";

import pcimage from "../../assets/header_pc.jpg";

type Props = {
  className?: string;
};

const Header = (props: Props) => {
  return (
    <div className={props.className}>
      {/* Container for demo purpose */}

      {/* Section: Design Block */}
      <section className="overflow-hidden">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          // style="background-position: 50%; background-image: url('https://mdbootstrap.com/img/new/standard/city/078.jpg');
          style={{
            height: "500px",
            backgroundPosition: "50%",
            backgroundImage: `url(${pcimage})`,
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[rgba(0,0,0,0.75)] bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  Find all the parts you need to
                  <br />
                  <span>build your next pc!</span>
                </h1>
                <a
                  className="mr-1.5 inline-block rounded-full border-2 border-white bg-white bg-opacity-5 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md backdrop-blur transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Start Shopping
                </a>
                <a
                  className="inline-block rounded-full border-2 border-transparent bg-white bg-transparent bg-opacity-80 px-7 py-3 text-sm font-bold uppercase leading-snug text-gray-700 backdrop-blur transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Browse Products
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="-mt-2.5 text-[#fff] md:-mt-4 lg:-mt-6 xl:-mt-10"
          // style="height: 50px; transform: scale(2); transform-origin: top center; color: #fff;"
          style={{
            height: "50px",
            transform: "scale(2)",
            transformOrigin: "top center",
          }}
        >
          <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>
      {/* Section: Design Block */}

      {/* Container for demo purpose */}
    </div>
  );
};

export default Header;
