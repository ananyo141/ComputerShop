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
// IMPORTANT: Tailwind cannot deduce partial class names sent as arguments, and
// removes them from final bundle, safe to use inline styling
const _generateModal = (
  initialTitle: string,
  image: string,
  buttonColor: string,
  bgColor: string = "white",
  textColor: string = "rgb(55 65 81)",
  buttonText: string = "Continue"
) => {
  return ({ title = initialTitle, text, isOpen, onClose }: Props) => {
    if (!isOpen) return null;
    return ReactDom.createPortal(
      <div className="fixed inset-0 z-50 bg-black bg-opacity-80">
        <div className="flex h-full flex-col items-center justify-center">
          <div
            className="relative flex h-1/2 w-min flex-col items-center justify-evenly rounded-xl p-9 sm:w-1/2 md:w-1/3 lg:w-1/4"
            style={{ color: textColor, backgroundColor: bgColor }}
          >
            <RxCross2
              className="absolute top-0 right-0 mr-5 mt-5 cursor-pointer text-2xl"
              onClick={() => onClose()}
            />
            <h1 className="text-center text-3xl font-thin">{title}</h1>
            <h3 className="text-center text-xl font-light tracking-wider opacity-80">
              {text}
            </h3>
            <img src={image} alt="modal image" className="w-1/2 sm:w-1/4" />
            <button
              onClick={() => onClose()}
              className="rounded-full px-16 py-2 text-xl text-white"
              style={{ backgroundColor: buttonColor }}
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

export const SuccessModal = _generateModal(
  "Success!",
  checkimg,
  "rgb(21 128 61)" // green-700
);
export const InfoModal = _generateModal(
  "Hey there!",
  infoimg,
  "rgb(59 130 246)" // blue-500
);
export const ErrorModal = _generateModal(
  "Face-plant!",
  errorimg,
  "rgb(190 18 60)", // rose-700
  "rgb(225 29 72)", // rose-600
  "rgb(229 231 235)", // gray-200
  "Try Again"
);
