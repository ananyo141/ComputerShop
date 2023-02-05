import React from "react";

import { useCartItem } from "../../hooks/useCartState";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import * as CartActions from "../../state/features/cart/cartSlice";

type Props = {
  productId: string;
};

const ItemVar2 = ({ productId }: Props) => {
  const dispatch = useAppDispatch();
  const product = useCartItem(productId);

  const onDelete = (_: React.MouseEvent<HTMLButtonElement>): void => {
    // Delete the item from cart
    dispatch(CartActions.setCartApi({ id: productId, amount: 0 }));
  };

  const onDecrement = (_: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(
      CartActions.setCartApi({ id: productId, amount: product.amount! - 1 })
    );
  };

  const onIncrement = (_: React.MouseEvent<HTMLButtonElement>): void => {
    // Increment the amount related to id
    // Guard against overflowing max-in-stock value
    dispatch(
      CartActions.setCartApi({ id: productId, amount: product.amount! + 1 })
    );
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="relative block rounded-lg bg-white shadow-lg lg:shadow-none">
        <div className="flex flex-col sm:flex-row">
          <div
            className="overflow-hidden rounded-lg shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src={product.imgLink}
              className="h-full transition duration-200 ease-in-out hover:scale-110"
            />
          </div>
          <div className="flex w-full flex-col justify-between p-4">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Price:</span> ${product.price}
              </p>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Seller:</span> {product.seller}
              </p>

              <div className="mt-4 flex items-center">
                <div className="flex items-center">
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition duration-150 ease-in-out hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                    aria-label="Decrement value"
                    onClick={onDecrement}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      ></path>
                    </svg>
                  </button>
                  <span className="px-4 text-gray-700">
                    {product.amount ?? 0}
                  </span>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition duration-150 ease-in-out hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                    aria-label="Increment value"
                    onClick={onIncrement}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>

                  <button
                    className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition duration-150 ease-in-out hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                    aria-label="Remove item"
                    onClick={onDelete}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>

                  <button
                    className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition duration-150 ease-in-out hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                    aria-label="Add to cart"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemVar2;
