// import { Link } from "react-router-dom" 
// import Navbar from "./navbar"
import { useState } from "react"
import { useEffect } from "react"
// import Card from "./Card"


// eslint-disable-next-line react/prop-types
function Shop({ cartItems, setCartItems }) {
    const [items, setItems] = useState([])
    // const [cartItems, setCartItems] = useState()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => {
            setItems(json);
          })
      }, []);

      const addToCart = (item) => {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
        alert("Item added to cart")
      };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setItems(json)
            })
    },[])

    return (
        <div className="shopPage">
          <div className="shopping-title">
            <h1>Shopping Page</h1>
          </div>
            <div className="products">
              {items.map((item) => (
                <div key={item.id} id={item.id} className="card">
                  <img
                    className="item-Image"
                    src={item.image}
                    alt={item.title}
                  />
                  <div>
                    <div>{item.title}</div><br />
                    <div>${item.price}</div><br />
                    <div className="btn-container"> 
                        <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                          Add to cart
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      );
    }

export default Shop