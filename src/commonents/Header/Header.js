import React from 'react';
import img from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={img} alt=""/>
            <nav>
                <a href="/shop">Order</a>
                <a href="/review">review</a>
                <a href="/manage">manage</a>
            </nav>
        </div>
    );
};

export default Header;