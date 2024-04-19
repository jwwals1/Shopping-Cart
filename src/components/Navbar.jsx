import { Link } from "react-router-dom"
// import { useState } from 'react'

function Navbar() {
  // const [count, setCount] = useState(0)
    return ( 
        <>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="shop">Shop</Link></li>
                <li><Link to="cart">Cart</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar