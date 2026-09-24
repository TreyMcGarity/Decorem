import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/modals/patron-modals/cart.scss';

// Tied into profile and listings based on selected for products that will be put into cart
const Cart = ({ onClose }) => {
    return (
        <div className='cart'>
            <button type="button" className="panel-close" onClick={onClose} aria-label="Close cart">&times;</button>
            <h2>Your Cart</h2>
            <p className='panel-empty'>Your cart is empty.</p>
            <Link to='/browsing' className='options' onClick={onClose}>Continue browsing</Link>
        </div>
    )
}

export default Cart;