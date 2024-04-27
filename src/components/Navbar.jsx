/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Navbar({ cartItems }) {
  return (
    <header>
      <div className="headerLinks">
        <Link to="/">
          <div className="link">Home</div>
        </Link>
        <Link to="shop">
          <div className="link">Shop</div>
        </Link>
        <Link to="cart">
          <div className="link">
            Cart
            {cartItems.length > 0 && (
              <div className="cart-count">{cartItems.length}</div>
            )}

          </div>
        </Link>
      </div>
    </header>
  );
}



export default Navbar;
  