/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import cart from "../media/cart.svg"


// eslint-disable-next-line react/prop-types
function Navbar({ cartItems }) {
  return (
    <header>
      <div className="navbar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="nav-link" textDecoration={"none"}>Home</div>
        </Link>
        <Link to="shop" style={{ textDecoration: 'none' }}>
          <div className="nav-link" >Shop</div>
        </Link>
        <Link to="cart" style={{ textDecoration: 'none' }}>
          <div className="nav-cart">
            <img src={cart} alt="cart logo" className="cart-logo"/>
            <div>
              <div className="cart-count">{cartItems.length}</div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}



export default Navbar;
  