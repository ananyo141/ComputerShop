import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import signup from "../../assets/signup.svg";
import { register } from "../../api/AuthApi";

type Props = {};

const SignUp = (props: Props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // const setModal = React.useContext(ModalContext);
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await register(name, email, password);
      // setModal("Success", "You have successfully registered!");
    } catch (error: any) {
      // setModal("Error", error.response.data.message);
    }
  };

  return (
    <section className="h-fit lg:h-screen">
      <div className="container flex h-full flex-col px-6 py-12">
        <h1 className="mx-auto mb-10 pl-2 text-4xl font-light tracking-tight lg:hidden">
          Create an account
        </h1>
        <div className="flex h-full flex-wrap items-center justify-center text-gray-800">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src={signup} className="w-full" alt="Phone image" />
          </div>
          <div className="md:w-8/12 lg:ml-20 lg:w-5/12">
            <h1 className="mb-8 hidden text-4xl font-light lg:block">
              Create an account
            </h1>
            <form onSubmit={submitHandler}>
              {/* Name input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email input */}
              <div className="mb-6">
                <input
                  type="email"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Password input */}
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6 flex items-center justify-between">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                    id="exampleCheck3"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-blue-600 transition duration-200 ease-in-out hover:text-blue-700 focus:text-blue-700 active:text-blue-800"
                >
                  Forgot password?
                </a>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="inline-block w-full rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Register
              </button>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                <p className="mx-4 mb-0 text-center font-semibold">OR</p>
              </div>
              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-[#3b5998] px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {/* Facebook */}
                <FaFacebookF />
                <span className="ml-2">Continue with Facebook</span>
              </a>
              <a
                className="flex w-full items-center justify-center rounded bg-[#55acee] px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {/* Twitter */}
                <FaTwitter />
                <span className="ml-2">Continue with Twitter</span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
