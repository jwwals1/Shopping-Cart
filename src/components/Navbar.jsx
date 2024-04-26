import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Header({ cartItems }) {
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
            {cartItems> 0 && (
              <div className="cart-count">{cartItems}</div>
            )}

          </div>
        </Link>
      </div>
    </header>
  );
}



export default Header;
  