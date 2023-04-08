import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirt) => {
    const isAdd = cart.find((product) => product?._id === tShirt?._id);
    if (!isAdd) {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    }
    else{
        alert(`Sorry! '${tShirt?.name}' is already added.`)
    }
  };

  const handleRemoveFromCart = (id) => {
    const cartAfterRemoveItem = cart?.filter((product) => product?._id !== id);
    setCart(cartAfterRemoveItem);
  };

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tShirts?.map((tShirt) => (
          <TShirt
            key={tShirt?._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          >
            {" "}
          </TShirt>
        ))}
      </div>

      <div className="cart-container">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}>
          {" "}
        </Cart>
      </div>
    </div>
  );
};

export default Home;
