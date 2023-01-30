import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal, { ModalContext } from "./components/Modal";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";

import { Product } from "./models/Product";
import { getAllProducts } from "./api/ProductApi";
import * as CartApi from "./api/CartApi";
import ScrollToTop from "./components/ScrollToTop";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CART_ITEMS":
      return { ...state, cartItems: action.payload };
    case "SET_WISHLIST_ITEMS":
      return { ...state, wishlistItems: action.payload };
    default:
      throw Error("Invalid action type");
  }
};

function App() {
  const initialState = {
    products: {},
    cartItems: {},
    wishlistItems: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const refreshCart = async () => {
      let fetchCart = sessionStorage.getItem("accessToken")
        ? await CartApi.getCart()
        : {};
      dispatch({ type: "SET_CART_ITEMS", payload: fetchCart });
    };
    const refreshProducts = async () => {
      const products = await getAllProducts();
      dispatch({ type: "SET_PRODUCTS", payload: products });
    };
    refreshProducts();
    refreshCart();
    // refresh cart items on login
  }, [sessionStorage.getItem("accessToken")]);

  const _setCartItems = (cartItems: any) => {
    dispatch({ type: "SET_CART_ITEMS", payload: cartItems });
  };

  // const _setWishlistItems = (wishlistItems: any) => {
  //   dispatch({ type: "SET_WISHLIST_ITEMS", payload: wishlistItems });
  // };

  const getProductState = (id: string): Product => {
    // get the product from the products object
    // fetch the product from the server if it's not in the products object
    // if not found, return null
    const product = state.products[id];
    if (!product) throw Error(`Product with id ${id} not found`);
    product.amount = state.cartItems[id] ?? 0;
    return product;
  };

  const setProductAmount = async (id: string, amount: number) => {
    // Delete if reaches 0
    // Guard against reaching negative number
    const cart = { ...state.cartItems };
    // if not in cart and amount is 0, do nothing
    if (!cart[id] && amount <= 0) return;
    if (amount <= 0) {
      await CartApi.removeFromCart(id);
      delete cart[id];
    }
    // otherwise, set amount
    else {
      const updateApi = cart[id] > 0 ? CartApi.updateCart : CartApi.addToCart;
      try {
        await updateApi(id, amount);
        cart[id] = amount;
        _setCartItems(cart);
      } catch (err: any) {
        const message =
          err.response.status === 401
            ? "You must be logged in to add to your cart"
            : err.message;
        setModal("Error", message);
      }
    }
  };

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalText, setModalText] = React.useState("");
  const setModal = (title: string, text: string, isOpen: boolean = true) => {
    setModalOpen(isOpen);
    setModalTitle(title);
    setModalText(text);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {modalOpen ? (
        <Modal
          title={modalTitle}
          text={modalText}
          onClose={() => setModalOpen(false)}
        />
      ) : null}
      <ModalContext.Provider value={setModal}>
        <BrowserRouter>
          <Navbar cartAmount={Object.keys(state.cartItems).length} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={Object.keys(state.products)}
                  getProduct={getProductState}
                  setProductAmount={setProductAmount}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  cartItems={Object.keys(state.cartItems)}
                  getProduct={getProductState}
                  setProductAmount={setProductAmount}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={Object.keys(state.cartItems)}
                  setProductAmount={setProductAmount}
                  getProduct={getProductState}
                  // wishlistItems={state.wishListItems}
                  // setWishListItems={setWishListItems}
                />
              }
            />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </BrowserRouter>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
