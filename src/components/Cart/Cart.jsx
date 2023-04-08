import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
   
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {
                cart.map( product => <p key={product?._id} >{product?.name} <button onClick={() => handleRemoveFromCart(product?._id)}>X</button></p>)
            }
            
        </div>
    );
};

export default Cart;