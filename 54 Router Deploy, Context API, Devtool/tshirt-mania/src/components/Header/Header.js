import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2>Tshirt Mania</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/orderreview">Order Review</Link>
        <Link to="/grandpa">Grandpa</Link>
      </nav>
    </div>
  );
};

export default Header;
