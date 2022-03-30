import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  return (
    <div>
      <h3>Post Detail of Post-{postId}</h3>
      <div>
        <h4>{post.title}</h4>
        <p>Posted by: {post.userId}</p>
        <h4>{post.body}</h4>
      </div>
    </div>
  );
};

export default PostDetail;
