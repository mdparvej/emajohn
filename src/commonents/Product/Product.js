import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { img, name, seller,price, stock} = props.product;
    return (
        <div className="products-container">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h2 className="product-name">{name}</h2>
                <p><small>By: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> on click</button>
            </div>
        </div>
    );
};

export default Product;