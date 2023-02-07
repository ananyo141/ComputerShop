import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { useCartItem } from "../../hooks/useCartState";
import { setCartApi } from "../../state/features/cart/cartSlice";
import { InfoModal } from "../Modals";

type Props = {
  productId: string;
};

const ItemVar1 = ({ productId }: Props) => {
  const dispatch = useAppDispatch();
  const product = useCartItem(productId);
  const [accessToken, isLoggedIn] = useAppSelector((state) => [
    state.login.accessToken,
    state.login.isLoggedIn,
  ]);
  const cart = useAppSelector((state) => state.cart.items);

  const [amount, setAmount] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  // Update product amount if it changes
  // This is required as product amount may be changed but useState doesn't
  // trigger rerender after it is set
  // Apparent when reloading
  useEffect(() => {
    setAmount(product.amount ?? 0);
  }, [product.amount]);

  if (!product)
    return (
      <div className="flex items-center justify-center">
        <span className="text-xs font-medium">Product not found</span>
      </div>
    );

  const onDecrement = (_: React.MouseEvent<HTMLDivElement>): void => {
    setAmount((amount: number) => (amount <= 0 ? 0 : amount - 1));
  };

  const onIncrement = (_: React.MouseEvent<HTMLDivElement>): void => {
    // Increment the amount related to id
    // Guard against overflowing max-in-stock value
    setAmount((amount: number) => amount + 1);
  };

  const onAddToCart = (): void => {
    // if item is not in cart and amount given is 0
    // don't dispatch api call, but show modal
    if (!cart[productId] && amount === 0) {
      setIsOpen(true);
      return;
    }
    dispatch(
      setCartApi({ id: product._id, amount: amount, accessToken: accessToken! })
    );
  };

  return (
    <div className="mb-6 lg:mb-0">
      <InfoModal
        title="Uh-oh!"
        text="Add some items to your cart first"
        isOpen={isOpen}
        onClose={setIsOpen}
      />
      <div className="relative block rounded-lg bg-white shadow-lg">
        <div className="flex">
          <div
            className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img src={product.imgLink} className="w-full" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[rgba(251,251,251,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </div>
        <div className="p-6">
          <h5 className="mb-3 text-lg font-bold">{product.name}</h5>
          <p className="mb-4 text-gray-500">
            <small>
              Price <u>${product.price}</u>
              <a href="" className="ml-2 italic text-gray-900">
                Sold by {product.seller}
              </a>
            </small>
          </p>
          <p className="mb-4 pb-2">{product.desc}</p>
          {isLoggedIn && (
            <div className="flex flex-wrap items-center justify-between gap-3 md:justify-center xl:gap-5">
              <button
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block rounded-full bg-blue-600 px-2 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg lg:px-3"
                onClick={onAddToCart}
              >
                Add to cart
              </button>
              {/* Item Count */}
              <div className="flex w-28 scale-125 items-center justify-evenly rounded-full bg-gray-300 md:scale-105 xl:scale-110">
                <div onClick={onDecrement}>
                  <AiOutlineMinus />
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-3 ">
                  <FaShoppingCart className="text-amber-700" />
                  <p>{amount}</p>
                </div>
                <div onClick={onIncrement}>
                  <AiOutlinePlus />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemVar1;
