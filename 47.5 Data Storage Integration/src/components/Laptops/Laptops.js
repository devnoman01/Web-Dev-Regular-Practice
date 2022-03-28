import React, { useEffect, useState } from "react";

import "./Laptops.css";
import Laptop from "../Laptop/Laptop";
import { totalPrice } from "../../utility/Calculation";
import { deleteShoppingCart } from "../../utility/fakedb";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  const total = totalPrice(laptops);
  /* const cosmetics = [
    {
      id: "623e1ca2fdf1468523d46613",
      picture:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07833555.png",
      price: 2514,
      name: "Miriam Evans",
    },
    {
      id: "623e1ca2cb4d68a16097f23d",
      picture:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07833555.png",
      price: 774,
      name: "Melissa Gomez",
    },
    {
      id: "623e1ca219df589ef8e9456d",
      picture:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07833555.png",
      price: 2327,
      name: "Teri Castaneda",
    },
    {
      id: "623e1ca2f1002f2f20f256e3",
      picture:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07833555.png",
      price: 282,
      name: "Jordan Reilly",
    },
    {
      id: "623e1ca2d26135775bcc845c",
      picture:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07833555.png",
      price: 514,
      name: "Celia Hudson",
    },
    {
      id: "623e1ca26ab9b89d145a7203",
      picture:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07833555.png",
      price: 1531,
      name: "Britney Grimes",
    },
    {
      id: "623e1ca22e820dc2c7ded6be",
      picture:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07833555.png",
      price: 3959,
      name: "Sonya Fowler",
    },
  ]; */

  /* const cosmetics = [
    { id: 1, name: "Laptop", price: 70000 },
    { id: 2, name: "Feature Phone", price: 4000 },
    { id: 3, name: "Smartphone", price: 25000 },
    { id: 4, name: "Smartwatch", price: 2500 },
    { id: 5, name: "Headphone", price: 1500 },
  ]; */
  return (
    <div>
      <h1>Laptops Component</h1>
      <button onClick={() => deleteShoppingCart()}>Remove all from cart</button>
      <h5>All products price: ${total}</h5>
      <div className="cards">
        {laptops.map((laptop) => (
          <Laptop key={laptop.id} laptop={laptop}></Laptop>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
