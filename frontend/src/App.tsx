import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal, { ModalContext } from "./components/Modal";
import ScrollToTop from "./components/ScrollToTop";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";

import * as CartApi from "./api/CartApi";
import * as ProductApi from "./api/ProductApi";

import { useProductState, useCartState } from "./hooks";

function App() {
  const { setProducts } = useProductState();
  const { setCart } = useCartState();
  React.useEffect(() => {
    const refreshCart = async () => {
      let fetchCart = sessionStorage.getItem("accessToken")
        ? await CartApi.getCart()
        : {};
      setCart(fetchCart);
    };
    const refreshProducts = async () => {
      const products = await ProductApi.getAllProducts();
      setProducts(products);
    };
    refreshProducts();
    refreshCart();
    // refresh cart items on login
  }, [sessionStorage.getItem("accessToken")]);

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
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
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
