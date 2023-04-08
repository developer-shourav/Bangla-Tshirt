import React from 'react';

const Cart = ({cart}) => {
   
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            
        </div>
    );
};

export default Cart;