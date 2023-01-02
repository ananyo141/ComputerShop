import React from "react";

import aboutbanner from "../../assets/aboutbanner.jpg";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      {/* Container for demo purpose */}

      {/* Section: Design Block */}
      <section className="mb-40">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          // style="background-position: 50%; background-image: url('https://mdbootstrap.com/img/new/textures/full/142.jpg'); height: 500px;"
          style={{
            height: "500px",
            backgroundPosition: "50%",
            backgroundImage: `url(${aboutbanner})`,
          }}
        ></div>

        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center text-gray-800">
            <div
              className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-lg md:py-16 md:px-12"
              // style="margin-top: -170px; background: hsla(0, 0%, 100%, 0.7); backdrop-filter: blur(30px);"
              style={{
                marginTop: "-170px",
                backdropFilter: "blur(30px)",
              }}
            >
              <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                The best offer on the market <br />
                <span className="text-blue-600">for your business</span>
              </h1>
              <div className="flex justify-center items-center gap-2">
                <a
                  className="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg md:mb-0 md:mr-2"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Get started
                </a>
                <a
                  className="border inline-block rounded bg-transparent px-7 py-3 text-sm font-medium uppercase leading-tight text-blue-600 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}

      {/* for demo purpose */}
    </div>
  );
};

export default Header;
