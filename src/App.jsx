// import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop.jsx"
import Cart from "./components/Cart.jsx"
import Home from "./components/Home.jsx";
import Footer from "./components/footer.jsx";

// eslint-disable-next-line react/prop-types
function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="shop"
          element={<Shop cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;