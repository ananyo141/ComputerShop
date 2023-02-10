import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import shoppingBag from "../../assets/shopping_bag.png";
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
  const [emptyCartAlert, setEmptyCartAlert] = React.useState(false);
  const [loginAlert, setLoginAlert] = React.useState(false);
  const [readMore, setReadMore] = React.useState(false);
  const description = readMore ? product.desc : product.desc.slice(0, 80);

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
    // if not amount not changed, do nothing
    if (amount && product.amount === amount) return;
    // if item is not in cart and amount given is 0
    // don't dispatch api call, but show modal
    if (!isLoggedIn) {
      setLoginAlert(true);
    } else if (!cart[productId] && amount === 0) {
      setEmptyCartAlert(true);
    } else {
      dispatch(
        setCartApi({
          id: product._id,
          amount: amount,
          accessToken: accessToken!,
        })
      );
    }
  };

  return (
    <div className="mb-6 lg:mb-0">
      <InfoModal
        title="Snap!"
        text="You are not logged in. Login to add items to cart."
        isOpen={loginAlert}
        onClose={() => setLoginAlert(false)}
      />
      <InfoModal
        title="Uh-oh!"
        text="Add some items to your cart first"
        isOpen={emptyCartAlert}
        onClose={() => setEmptyCartAlert(false)}
      />
      <div className="relative block h-full rounded-lg bg-white shadow-lg">
        <div className="flex">
          <div
            className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img src={product.imgLink} className="w-full" />
          </div>
        </div>
        <div className="p-6">
          <h5 className="pb-3 text-lg font-bold">{product.name}</h5>
          <p className="pb-4 text-gray-500">
            <small>
              Price <u>${product.price}</u>
              <a href="" className="ml-2 italic text-gray-900">
                Sold by {product.seller}
              </a>
            </small>
          </p>
          <p className="pb-6">
            {description}
            <small
              className="ml-2 cursor-pointer italic text-blue-800 underline"
              onClick={() => setReadMore(!readMore)}
            >
              ...Read {readMore ? "less" : "more"}
            </small>
          </p>
        </div>
      </div>
      <div className="relative pt-10 xl:pt-20">
        <div className="absolute inset-x-0 bottom-12 flex flex-col gap-3 px-5 xl:bottom-24 xl:gap-5">
          <div className="flex justify-center gap-8 xl:justify-between">
            <img src={shoppingBag} className="w-8 xl:w-10" />
            <div className="flex items-center gap-8 rounded-xl border-2 xl:px-5">
              <div onClick={onDecrement}>
                <AiOutlineMinus />
              </div>
              <span>{amount}</span>
              <div onClick={onIncrement}>
                <AiOutlinePlus />
              </div>
            </div>
          </div>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mx-auto inline-block w-72 rounded-xl border-2 px-2 py-2.5 text-xs font-medium uppercase leading-tight text-gray-800 shadow-md transition duration-150 ease-in-out hover:bg-gray-200 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg md:w-full lg:px-3"
            onClick={onAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemVar1;
