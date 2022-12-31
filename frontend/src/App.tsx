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

import { Convert } from "./models/Product";
import { CartStorageObjectType } from "./models/CartItem";

import ProductData from "./data/products.json";

function App() {
  const products = Convert.toProducts(JSON.stringify(ProductData));
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
              onChangeCart={setCartItems}
            />
          }
        ></Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
