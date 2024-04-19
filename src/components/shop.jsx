import { Link } from "react-router-dom" 

function Shop() {
    return ( 
        <>
        <nav>
        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
            <Link to=".">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
        <div>
            <div>
                <h2>This is the shop page</h2>
            </div>
        </div>
        </>
    )
}

export default Shop