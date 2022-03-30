import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Welcome to React Router!</h1>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
