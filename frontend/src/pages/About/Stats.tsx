import React from "react";

import customerPic from "../../assets/about_stat.jpg";

import "./stats.css";

type Props = {};

const Stats = (props: Props) => {
  return (
    <div className="container my-24 mx-auto px-6">
      {/* Container for demo purpose */}

      {/* Section: Design Block */}
      <section className="mb-32 text-center text-gray-800 lg:text-left">
        {/* Jumbotron */}
        <div className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="grid items-center lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-lg backdrop-blur-2xl md:px-12 lg:-mr-14">
                <h2 className="display-5 mb-4 text-3xl font-bold">
                  Why is it so great?
                </h2>
                <p className="mb-12 text-gray-500">
                  Our service provides you the best and most efficient product
                  collection and competitive prices never seen before, trusted
                  by customers worldwide and relied upon by thousands of
                  international companies. Choose your build today!
                </p>

                <div className="grid gap-x-6 md:grid-cols-3">
                  <div className="mb-12 md:mb-0">
                    <h2 className="text-dark mb-4 text-3xl font-bold">97%</h2>
                    <h5 className="mb-0 text-lg font-medium text-gray-500">
                      Less Hassle
                    </h5>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <h2 className="text-dark mb-4 text-3xl font-bold">100%</h2>
                    <h5 className="mb-0 text-lg font-medium text-gray-500">
                      Value
                    </h5>
                  </div>

                  <div className="">
                    <h2 className="text-dark mb-4 text-3xl font-bold">0%</h2>
                    <h5 className="mb-0 text-lg font-medium text-gray-500">
                      Problems
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src={customerPic}
                className="fancy-border-radius rotate-lg-6 w-full shadow-lg"
                alt="Happy Customer"
              />
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}

      {/* Container for demo purpose */}
    </div>
  );
};

export default Stats;
