import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      {/* Container for demo purpose */}

      {/* Section: Design Block */}
      <section className="mb-40">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          // style="background-position: 50%; background-image: url('https://mdbootstrap.com/img/new/textures/full/142.jpg'); height: 500px;"
          style={{
            height: "500px",
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/textures/full/142.jpg')",
          }}
        ></div>

        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center text-gray-800">
            <div
              className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 bg-[hsla(0,0%,100%,0.7)]"
              // style="margin-top: -170px; background: hsla(0, 0%, 100%, 0.7); backdrop-filter: blur(30px);"
              style={{
                marginTop: "-170px",
                backdropFilter: "blur(30px)",
              }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                The best offer on the market <br />
                <span className="text-blue-600">for your business</span>
              </h1>
              <a
                className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Get started
              </a>
              <a
                className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
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
      </section>
      {/* Section: Design Block */}

      {/* for demo purpose */}
    </div>
  );
};

export default About;
