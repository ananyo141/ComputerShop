import { useState } from "react";
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

import { Convert } from "./models/Product";
import { CartStorageObjectType } from "./models/CartItem";

import PRODUCTS from "./data/FakerProducts";

function App() {
  const products = Convert.toProducts(JSON.stringify(PRODUCTS));
  const [cartItems, setCartItems] = useState<CartStorageObjectType>({});

  return (
    <BrowserRouter>
      <div className="pb-14">
        <Navbar cart={cartItems} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              cartItems={cartItems}
              onCartChange={setCartItems}
            />
          }
        ></Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cart"
          element={
            <Cart
              products={products}
              cartItems={cartItems}
              onCartChange={setCartItems}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout products={products} cartItems={cartItems} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
