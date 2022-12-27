import React from "react";

import robotimg from "../../assets/robot.jpg";

type Props = {};

const NoPage = (props: Props) => {
  return (
    <div className="mx-auto -mt-36 -mb-20 flex h-screen items-center justify-center ">
      {/* Section: Design Block */}
      <section className="text-gray-800">
        <div
          className="relative h-[300px] overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${robotimg})`,
          }}
        ></div>
        <div className="container px-4 text-gray-800 md:px-12">
          <div className="mt-[-100px] block rounded-lg bg-[hsla(0,0%,100%,0.8)] py-10 px-4 shadow-lg backdrop-blur-xl md:py-12 md:px-6">
            <div className="flex flex-wrap justify-center text-center lg:text-left">
              <div className="w-full shrink-0 grow-0 basis-auto px-6 xl:w-10/12">
                <div className="grid items-center gap-x-6 lg:grid-cols-2">
                  <div className="mb-10 lg:mb-0">
                    <h2 className="text-3xl font-bold">
                      Seems like you're lost
                      <br />
                      <span className="text-blue-600">
                        Continue shopping on our site
                      </span>
                    </h2>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1">
                    <a
                      className="inline-block rounded-full border-2 bg-blue-600 px-8 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      href="#!"
                      role="button"
                    >
                      Start Shopping
                    </a>
                    <a
                      className="inline-block rounded-full border border-transparent border-blue-600 bg-transparent px-7 py-3 text-sm font-medium uppercase leading-snug tracking-tight text-blue-600 transition duration-150 ease-in-out focus:outline-none focus:ring-0"
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
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  );
};

export default NoPage;
