import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h3>Products</h3>
      <p>
        Which product do you want Mr. {user?.displayName && user?.displayName}
      </p>
    </div>
  );
};

export default Products;
