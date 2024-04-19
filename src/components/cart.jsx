import { Link } from "react-router-dom" 

function Cart() {
    return ( 
        <>
        <nav>
        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
        <div>
            <div>
                <h2>This is the cart page</h2>
            </div>
        </div>
        </>
    )
}

export default Cart