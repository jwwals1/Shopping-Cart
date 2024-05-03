/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

function Cart({ cartItems }) {
  const [totalItems, setTotalItems] = useState(0);


  const calculateTotalItems = () => {
    let total = 0;
    for (let product of cartItems) {
      total += product.quantity;
    }
    setTotalItems(total);
  };




  useEffect(() => {
    calculateTotalItems();
  }, [cartItems]);

  return (
    <div className="cart-page">
      <div className="cart-title">
        <h1>Shopping Cart Page</h1>
      </div>
      {cartItems.length > 0 ? (
        <div>
          <div className="cart-value">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="empty-cart">
            <h1>Your cart is empty!</h1>
            <h2>Add items to your cart!</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;