/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';

function Card({item}) {
    return (
    <div className="card">
        <h2>{item.title}</h2>
        <h2>{item.price}</h2>
        <h2>{item.description}</h2>
        <h2>{item.category}</h2>
        <img src={item.image} alt="item image" className="itemImage"/>
    
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

