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

import { useAppDispatch } from "./hooks/useReduxHooks";
import { getCartItems } from "./state/features/cart/cartSlice";
import { getProducts } from "./state/features/products/productSlice";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
    dispatch(getCartItems());
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
