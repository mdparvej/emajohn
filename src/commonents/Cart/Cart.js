import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cartDetails;
    //const totalPrice = cart.reduce((total,prd) => total + prd.price,0);
    let total= 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total + element.price;
    }
    let shiping = 0;
    if(total > 200){
        shiping = 0;
    }
    else if(total > 70){
        shiping = 4.99;
    }
    else if(total > 0){
        shiping = 12.99;
    }
    const tax = (total /10).toFixed(2);
    const grandTotal = (total + shiping + Number(tax)).toFixed(2);
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <h4>Items order: {cart.length}</h4>
            <h4>Product Price: {(total).toFixed(2)}</h4>
            <h4>Shiping: {shiping}</h4>
            <h4>TaX: {tax}</h4>
            <h4>Total price: $ {grandTotal}</h4>

        </div>
    );
};

export default Cart;