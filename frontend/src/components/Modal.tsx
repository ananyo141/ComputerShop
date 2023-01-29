import React from "react";

type Props = {
  title: string;
  text: string;
  onClose: CallableFunction;
};

export const ModalContext = React.createContext((...args: any) => {});

const Modal = ({ title, text, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="relative mx-auto my-0 w-11/12 max-w-3xl rounded bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <button
            className="text-3xl font-semibold leading-none hover:text-gray-600"
            onClick={() => onClose()}
          >
            &times;
          </button>
        </div>
        <div className="mb-8">{text}</div>
        <div className="flex justify-end">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
            onClick={() => onClose()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
