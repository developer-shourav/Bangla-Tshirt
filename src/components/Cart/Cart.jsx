import React from 'react';

const Cart = ({cart}) => {
   
    return (
        <div>
            <h2>Order Summary</h2>
            {
                cart?.map( product => <p >id :{product?._id}</p>)
            }
        </div>
    );
};

export default Cart;