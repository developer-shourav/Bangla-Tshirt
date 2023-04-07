import React from 'react';
import './TShirt.css'
const TShirt = ({tShirt, handleAddToCart}) => {
    const {_id, gender, picture, name, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;