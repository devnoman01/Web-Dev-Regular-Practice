import React from "react";
import { addToDb, removeFromDb } from "../../utility/fakedb";
import "./Laptop.css";

const Laptop = (props) => {
  const { id, name, price, picture } = props.laptop;

  const addToCart = (id) => {
    addToDb(id);
  };

  const removeFromCart = (id) => {
    removeFromDb(id);
  };

  return (
    <div className="card">
      <img src={picture} alt="" />
      <p className="name">{name}</p>
      <p>Product ID: {id}</p>
      <p>
        Product Price: <b>${price}</b>
      </p>
      <button className="addToCart" onClick={() => addToCart(id)}>
        ADD TO CART
      </button>
      <br />
      <button className="removeFromCart" onClick={() => removeFromCart(id)}>
        Remove from cart
      </button>
    </div>
  );
};

export default Laptop;
