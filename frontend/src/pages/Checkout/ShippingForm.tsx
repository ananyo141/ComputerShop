import React from "react";

type Props = {
  setFirstName: CallableFunction;
  setLastName: CallableFunction;
  setAddress: CallableFunction;
  setCity: CallableFunction;
  setState: CallableFunction;
  setZip: CallableFunction;
  setCountry: CallableFunction;
  setPhone: CallableFunction;
};

const ShippingForm = (props: Props) => {
  props.setCountry("India"); // hack to set default value
  return (
    <form
      id="shipping-form"
      className="md:text-md flex max-w-4xl flex-col gap-4 text-lg"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <label
            htmlFor="first_name"
            className="block font-medium text-gray-700"
          >
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="given-name"
              onChange={(e) => props.setFirstName(e.target.value)}
              required={true}
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm "
            />
          </div>
        </div>
        <div className="w-full lg:ml-4 lg:w-1/2">
          <label
            htmlFor="last_name"
            className="block font-medium text-gray-700"
          >
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="family-name"
              onChange={(e) => props.setLastName(e.target.value)}
              required={true}
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm "
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="country" className="block  font-medium text-gray-700">
          Country / Region
        </label>
        <div className="mt-1">
          <select
            id="country"
            name="country"
            autoComplete="country"
            onChange={(e) => props.setCountry(e.target.value)}
            required={true}
            className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm "
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="street_address"
          className="block  font-medium text-gray-700"
        >
          Street address
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="street_address"
            id="street_address"
            autoComplete="street-address"
            onChange={(e) => props.setAddress(e.target.value)}
            required={true}
            className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm "
          />
        </div>
      </div>
      <div className="flex flex-col justify-between lg:flex-row lg:gap-4">
        <div className="mt-4">
          <label htmlFor="city" className="block  font-medium text-gray-700">
            City
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="city"
              id="city"
              onChange={(e) => props.setCity(e.target.value)}
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm "
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="state" className="block  font-medium text-gray-700">
            State / Province
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="state"
              id="state"
              onChange={(e) => props.setState(e.target.value)}
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm "
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="zip" className="block  font-medium text-gray-700">
            ZIP / Postal
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="zip"
              id="zip"
              autoComplete="postal-code"
              onChange={(e) => props.setZip(e.target.value)}
              required={true}
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm "
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="phone" className="block  font-medium text-gray-700">
          Phone
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="tel"
            onChange={(e) => props.setPhone(e.target.value)}
            required={true}
            className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm "
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center justify-between lg:flex-row">
        <div className="flex items-center">
          <input
            id="save_address"
            name="save_address"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="save_address"
            className="ml-2 block leading-tight text-gray-900"
          >
            Save this information for next time
          </label>
        </div>
        <div className="">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Privacy Policy
          </a>
        </div>
      </div>
    </form>
  );
};

export default ShippingForm;
