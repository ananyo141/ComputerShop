import React from "react";

import { useAppSelector } from "../../hooks/useReduxHooks";
type Props = {};

const Profile = (props: Props) => {
  const loginState = useAppSelector((state) => state.login);

  return (
    <section
      className="-mb-52 min-h-screen bg-cover bg-no-repeat pt-20"
      style={{
        backgroundImage: "url(https://source.unsplash.com/random",
        backgroundPosition: "50%",
      }}
    >
      <div className="mx-auto my-32 flex h-auto max-w-4xl flex-wrap items-center lg:my-0 lg:h-screen">
        {/*Main Col*/}
        <div
          id="profile"
          className="mx-6 w-full rounded-lg bg-white opacity-90 shadow-2xl lg:mx-0 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none"
        >
          <div className="p-4 text-center md:p-12 lg:text-left">
            {/* Image for mobile view*/}
            <div
              className="mx-auto -mt-16 block h-48 w-48 rounded-full bg-cover bg-center opacity-100 shadow-xl lg:hidden"
              style={{
                backgroundImage:
                  'url("https://mdbootstrap.com/img/new/avatars/2.jpg")',
              }}
            />
            <h6 className="pt-8 italic">Hi, I'm</h6>
            <h1 className="text-3xl font-bold lg:pt-0">{loginState.name}</h1>
            <div className="pt-8 mx-auto w-4/5 border-b-2 border-green-500 opacity-25 lg:mx-0" />
            <h6 className="pt-8 italic">Registered Email</h6>
            <p className="flex items-center justify-center pt-2 text-base font-bold underline lg:justify-start">
              {loginState.email}
            </p>
          </div>
        </div>
        {/*Img Col*/}
        <div className="w-full lg:w-2/5">
          {/* Big profile image for side bar (desktop) */}
          <img
            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
            className="hidden h-96 rounded-none opacity-100 shadow-2xl lg:block lg:rounded-lg"
          />
          {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
