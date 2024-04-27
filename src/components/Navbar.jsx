/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Navbar({ cartItems }) {
  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <div className="nav-link">Home</div>
        </Link>
        <Link to="shop">
          <div className="nav-link">Shop</div>
        </Link>
        <Link to="nav-link">
          <div className="nav-cart">
            Cart
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
  