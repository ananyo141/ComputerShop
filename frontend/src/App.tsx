// https://www.daggala.com/when-to-use-the-usereducer-hook/

import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

const productsArr: Product[] = await getAllProducts();
// convert the products array to an object with id as key
const products = productsArr.reduce((map: any, product: Product) => {
  map[product._id] = product;
  return map;
}, {});

const initialState = {
  products: products,
  cartItems: {},
  wishlistItems: {},
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return { ...state, cartItems: action.payload };
    case "SET_WISHLIST_ITEMS":
      return { ...state, wishlistItems: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      await updateApi(id, amount);
      cart[id] = amount;
    }
    _setCartItems(cart);
  };

  return (
    <div className="flex min-h-screen flex-col">
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
      </BrowserRouter>
    </div>
  );
}

export default App;
