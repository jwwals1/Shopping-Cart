import { Link } from "react-router-dom"
// import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function Navbar({counter}) {
    return ( 
        <>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="shop">Shop</Link></li>
                <li><Link to="cart">Cart <div>{counter}</div></Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar