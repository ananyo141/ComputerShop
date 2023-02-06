// Design: https://i.pinimg.com/originals/91/41/8e/91418e228e42282dece83b4041a9a2a0.png
import ReactDom from "react-dom";
import { RxCross2 } from "react-icons/rx";

import checkimg from "../../assets/check.png";
import infoimg from "../../assets/information.png";
import errorimg from "../../assets/error_cross.png";

type Props = {
  title?: string;
  isOpen: boolean;
  text: string;
  onClose: CallableFunction;
};

// Generate modals for different types
// All use the same design
const _generateModal = (
  initialTitle: string,
  image: string,
  buttonColor: string,
  bgColor: string = "white",
  textColor: string = "gray-700",
  buttonText: string = "Continue"
) => {
  return ({ title = initialTitle, text, isOpen, onClose }: Props) => {
    if (!isOpen) return null;
    return ReactDom.createPortal(
      <div className="fixed inset-0 bg-black bg-opacity-80">
        <div className="flex h-full flex-col items-center justify-center">
          <div
            className={`relative flex h-1/2 w-1/2 flex-col items-center justify-evenly rounded-xl text-${textColor} bg-${bgColor} lg:w-1/4`}
          >
            <RxCross2
              className="absolute top-0 right-0 mr-5 mt-5 cursor-pointer text-2xl"
              onClick={() => onClose()}
            />
            <h1 className="text-center text-3xl font-thin">{title}</h1>
            <h3 className="text-center text-xl font-light tracking-wider opacity-80">
              {text}
            </h3>
            <img
              src={image}
              alt="info image"
              className="hidden w-1/6 lg:block lg:w-1/4"
            />
            <button
              onClick={() => onClose()}
              className={`rounded-full bg-${buttonColor} px-16 py-2 text-xl text-white`}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root") as HTMLElement
    );
  };
};

export const SuccessModal = _generateModal("Success!", checkimg, "green-700");
export const InfoModal = _generateModal("Hey there!", infoimg, "blue-500");
export const ErrorModal = _generateModal(
  "Face-plant!",
  errorimg,
  "rose-700",
  "rose-600",
  "gray-200",
  "Try Again"
);
