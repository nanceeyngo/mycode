import React, { useContext } from 'react';
import './main.css';
import { CartItem } from './Cart_items';
// import { products } from '../data'
import { Cartcontext } from '../context/Globalcontext';

export const Cart = () => {

    const {cart} = useContext(Cartcontext);

    return (
        <>
        
        <div className='cart'>
        <h1>Shopping Cart</h1>

            

            {cart.length === 0 ?
            <p id='empty'>The cart is empty.</p> :
            cart.map(item => (<CartItem key={item.id} cart_items={item} />))
            
            }
            
            <span id='total'>Total $ {cart.reduce((total, item) => total + item.price * item.stock, 0)}</span>
            <button>Checkout</button>
        </div>

    
        </>
    );
};

