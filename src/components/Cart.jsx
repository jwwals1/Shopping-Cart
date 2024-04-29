/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

function Cart({ cartItems, setCartItems }) {
  const [totalItems, setTotalItems] = useState(0);


  const calculateTotalItems = () => {
    let total = 0;
    for (let product of cartItems) {
      total += product.quantity;
    }
    setTotalItems(total);
  };

  const quantityChange = (id, type) => {
    const updatedItems = cartItems.map((product) => {
      if (product.id === id) {
        let newQuantity =
          type === "increment" ? product.quantity + 1 : product.quantity - 1;
        if (newQuantity <= 0) {
          return null;
        } else {
          return {
            ...product,
            quantity: newQuantity,
          };
        }
      }
      return product;
    });

    setCartItems(updatedItems.filter((product) => product !== null));
  };



  useEffect(() => {
    calculateTotalItems();
  }, [cartItems]);

  return (
    <div className="cart-page">
      <div >
        <h1>Shopping Cart Page</h1>
      </div>
      {cartItems.length > 0 ? (
        <div>
          <div >
            <h2>
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </h2>
          </div>
          <div className="products">
            {cartItems.map((product) => (
              <div key={product.id} className="card">
                <img  className="item-Image" src={product.image} alt={product.title} />
                <div>
                  <div >
                    <h2>{product.title}</h2>

                  </div>
                  <div>
                    {product.category}
                  </div><br />
                  <div>
                    {product.description}
                  </div>
                  <div><br />
                    Rating: {product.rating.rate}
                  </div>
                  <div >
                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                    <div className="quantity">
                      <button
                        value="-"
                        onClick={() => quantityChange(product.id, "decrement")}
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        value="+"
                        onClick={() => quantityChange(product.id, "increment")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div >
            <h1>Your cart is empty!</h1>
            <h2>Add some items to your cart!</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;