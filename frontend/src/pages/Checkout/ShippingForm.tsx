import React from "react";

type Props = {};

const ShippingForm = (props: Props) => {
  return (
    <form>
      <div className="mt-8">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm sm:text-sm"
              />
            </div>
          </div>
          <div className="w-full lg:ml-4 lg:w-1/2">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="family-name"
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Company
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="organization"
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country / Region
          </label>
          <div className="mt-1">
            <select
              id="country"
              name="country"
              autoComplete="country"
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm sm:text-sm"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="street_address"
            className="block text-sm font-medium text-gray-700"
          >
            Street address
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="street_address"
              id="street_address"
              autoComplete="street-address"
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="city"
              id="city"
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State / Province
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="state"
              id="state"
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="zip"
            className="block text-sm font-medium text-gray-700"
          >
            ZIP / Postal
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="zip"
              id="zip"
              autoComplete="postal-code"
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="save_address"
              name="save_address"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="save_address"
              className="ml-2 block text-sm text-gray-900"
            >
              Save this information for next time
            </label>
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-200 pt-6">
        <div className="flex justify-between">
          <a
            href="#"
            className="group inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </a>
          <button
            type="submit"
            className="group inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default ShippingForm;
