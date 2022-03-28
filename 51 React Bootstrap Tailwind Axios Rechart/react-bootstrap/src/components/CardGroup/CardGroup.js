import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
  const products = [
    { id: 1, name: "Laptop Pro Max", price: 60000 },
    { id: 2, name: "Laptop Pro", price: 50000 },
    { id: 3, name: "Laptop", price: 40000 },
  ];
  return (
    <div>
      <h1>CardGroup</h1>
      <div className="card-group">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
