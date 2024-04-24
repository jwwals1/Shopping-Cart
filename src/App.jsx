// import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
// import { useState } from "react";

// eslint-disable-next-line react/prop-types
function App () {
  const [cartItems, setCartItems] = useState([])
  return (
    <>
    <div>
      <Navbar counter={cartItems.length}/>
      <Outlet context={[cartItems, setCartItems]}/>
    </div>
    </>
  );
}

export default App;