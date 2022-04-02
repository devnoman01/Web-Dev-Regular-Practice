import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart, handleRemoveAll }) => {
  // Conditional rendering options
  // 1. Element variable
  // 2. ternary operator condition ? true : false
  let command;
  if (cart.length === 0) {
    command = <p>Please Add Item</p>;
  } else if (cart.length > 0 && cart.length < 4) {
    command = <p>Add More</p>;
  } else {
    command = <p>Great Choice</p>;
  }

  return (
    <div>
      <h3>This is Cart</h3>
      <h4>Item Selected: {cart.length}</h4>
      <div>
        {cart.map((tShirt) => (
          <p>
            {tShirt.name}{" "}
            <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
          </p>
        ))}
      </div>
      {command}
      {cart.length >= 2 ? (
        <button onClick={() => handleRemoveAll()}>Remove All</button>
      ) : (
        <p>Keep Adding</p>
      )}
      {cart.length === 4 && <button className="orange-bg">Review Order</button>}
    </div>
  );
};

export default Cart;
