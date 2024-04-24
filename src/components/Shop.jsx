// import { Link } from "react-router-dom" 
// import Navbar from "./navbar"
import { useState } from "react"
import { useEffect } from "react"
import Card from "./Card"
import { useOutletContext } from "react-router-dom"

function Shop() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useOutletContext()

    function addCart(item, counter) {
        const array = cartItems.map(cartproduct => {
            if (cartproduct.id === item.id) {
                return {...item, counter: cartproduct.counter + counter}
            }
            return cartproduct
        })
        setCartItems(array)
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setItems(json)
            })
    },[])

    return (  
        <>
        <div>
            <div>
            <h2>This is the shop page</h2>
            </div>
            <div className="item">
                {items.map(item => <Card key={item.id} item = {item} setCartItems ={addCart}/>)}
            </div>
        </div>
        </>
    )
}

export default Shop