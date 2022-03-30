import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  // const params = useParams();
  const { friendId } = useParams();
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  });

  return (
    <div>
      <h2>Friend Details</h2>
      <p>This is information about friend: {friendId}</p>
      <p>Name: {friend.name}</p>
      <p>Usernnme: {friend.username}</p>
      <p>Email: {friend.email}</p>
      <p>Phone No: {friend.phone}</p>
      <p>Website: {friend.website}</p>
    </div>
  );
};

export default FriendDetail;
