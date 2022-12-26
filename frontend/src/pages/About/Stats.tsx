import React from "react";

import "./stats.css";

type Props = {};

const Stats = (props: Props) => {
  return (
    <div className="container my-24 px-6 mx-auto">
      {/* Container for demo purpose */}

      {/* Section: Design Block */}
      <section className="mb-32 text-gray-800 text-center lg:text-left">
        {/* Jumbotron */}
        <div className="container mx-auto xl:px-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="mb-12 lg:mb-0">
              <div
                className="relative z-[1] backdrop-blur-2xl bg-[hsla(0,0%,100%,0.55)] block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                // style="backdrop-filter: blur(30px); z-index: 1"
              >
                <h2 className="text-3xl font-bold mb-4 display-5">
                  Why is it so great?
                </h2>
                <p className="text-gray-500 mb-12">
                  Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                  neque iaculis malesuada. Aenean gravida magna orci, non
                  efficitur est porta id. Donec magna diam.
                </p>

                <div className="grid md:grid-cols-3 gap-x-6">
                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold text-dark mb-4">10%</h2>
                    <h5 className="text-lg font-medium text-gray-500 mb-0">
                      Less sugar
                    </h5>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold text-dark mb-4">70%</h2>
                    <h5 className="text-lg font-medium text-gray-500 mb-0">
                      More flavor
                    </h5>
                  </div>

                  <div className="">
                    <h2 className="text-3xl font-bold text-dark mb-4">0%</h2>
                    <h5 className="text-lg font-medium text-gray-500 mb-0">
                      Gluten
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/088.jpg"
                className="w-full shadow-lg fancy-border-radius rotate-lg-6"
                alt=""
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
