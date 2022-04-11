import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Products = () => {
  const [user] = useAuthState(auth);
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
