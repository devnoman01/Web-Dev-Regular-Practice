import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { name, username, email, id } = props.friend;
  const navigate = useNavigate();
  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };
  return (
    <div className="card">
      <h3>{name}</h3>
      <Link to={"/friend/" + id}>Show Details</Link>
      <br />
      <button onClick={showFriendDetail}>{username}</button>
      <p>{email}</p>
    </div>
  );
};

export default Friend;
