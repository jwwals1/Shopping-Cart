// import { Link } from "react-router-dom" 
// import Navbar from "../components/navbar"
import Card from "./Card"
import { useOutletContext } from "react-router-dom"

function Cart() {
    const [cartItems, setCartItems] = useOutletContext()

    const changeCart = (item) => {
        const array = cartItems.map(cartproduct => {
            if (cartproduct.id === item.id) {
                return item
            }
            return item
        })
        setCartItems(array)
    }
    return ( 
        <>
        <div>Cart Count {cartItems.length}</div>
            <div>{cartItems.map(item => <Card key={item.id} changeCart={changeCart}/>)}</div>
        </>
    )
}

export default Cart