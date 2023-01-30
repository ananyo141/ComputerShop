import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import signin from "../../assets/signin.webp";

import { login } from "../../api/AuthApi";
import { ModalContext } from "../../components/Modal";

type Props = {};

const SignIn = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigator = useNavigate();

  const setModal = React.useContext(ModalContext);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const tokens = await login(email, password);
      sessionStorage.setItem("accessToken", tokens.accessToken);
      setModal("Success", "You have successfully logged in!");
      setTimeout(() => {
        navigator("/"); // navigate to home page
        setModal("", "", false);
      }, 2000);
    } catch (error: any) {
      setModal("Error", error.response.data.message);
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full px-6 text-gray-800">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img src={signin} className="w-full" alt="Sample image" />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
            <form onSubmit={submitHandler}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <div className="mb-0 mr-4 text-lg">
                  <p className="inline-block pr-2 text-xl uppercase opacity-90 first-letter:text-3xl">
                    Sign in
                  </p>
                  with
                </div>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="mx-1 inline-block rounded-full bg-blue-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  {/* Facebook */}
                  <FaFacebookF className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="mx-1 inline-block rounded-full bg-blue-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  {/* Twitter */}
                  <FaTwitter className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="mx-1 inline-block rounded-full bg-blue-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  {/* Linkedin */}
                  <FaLinkedinIn className="h-4 w-4" />
                </button>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                <p className="mx-4 mb-0 text-center font-semibold">Or</p>
              </div>

              {/* Email input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
              </div>

              {/* Password input */}
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleFormControlInput2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <div className="mb-6 flex items-center justify-between">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-gray-800">
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  Login
                </button>
                <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="text-red-600 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
