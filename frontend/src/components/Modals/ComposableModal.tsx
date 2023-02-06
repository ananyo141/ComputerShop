import ReactDom from "react-dom";
import { RxCross2 } from "react-icons/rx";

const ComposableModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: CallableFunction;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-80">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="relative flex flex-col items-center justify-center rounded-xl bg-white text-gray-700">
          <RxCross2
            className="absolute top-0 right-0 mr-5 mt-5 cursor-pointer text-2xl"
            onClick={() => onClose()}
          />
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default ComposableModal;
