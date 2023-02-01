import React, { useState } from 'react';
import fakeData from '../../fakeData/products1.json';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = (props) => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                    {
                        products.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart cartDetails={cart}></Cart>
            </div>

        </div>
    );
};
export default Shop;  