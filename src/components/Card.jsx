/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';

// import { useState } from "react";

function Card({item}) {
    // const [cartNumber, setCartNumber] = useState(0)
    // const [cartItem, setCartItem] = useState([])
    return (
    <div className="card">
        <h2>{item.title}</h2>
        <h2>{item.price}</h2>
        <h2>{item.description}</h2>
        <h2>{item.category}</h2>
        <img src={item.image} alt="item image" className="itemImage"/>
        <button onClick={() => console.log(item)}>Add To Cart</button>
    </div>
)}

// Card.prototype = {
//     item: PropTypes.object,
//     title: PropTypes.string,
//     price: PropTypes.number,
//     description: PropTypes.string,
//     category: PropTypes.string,
//     image: PropTypes.img
// }

export default Card

