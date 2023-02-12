import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

import { useAppDispatch, useAppSelector } from "./hooks/useReduxHooks";
import { getCartApi, clearCart } from "./state/features/cart/cartSlice";
import { getProducts } from "./state/features/products/productSlice";
import { loadLoginInfo } from "./state/features/login/loginSlice";

function App() {
  const [isLoggedIn, accessToken] = useAppSelector((state) => [
    state.login.isLoggedIn,
    state.login.accessToken,
  ]);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
    dispatch(loadLoginInfo())
      .unwrap()
      .then(() => (accessToken ? dispatch(getCartApi(accessToken)) : null))
      .catch(() => dispatch(clearCart()));
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <div className="pb-[170px]"></div>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
