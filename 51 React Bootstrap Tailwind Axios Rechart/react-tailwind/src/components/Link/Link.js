import React from "react";

const Link = (props) => {
  const { name, link } = props.route;
  return (
    <li className="mx-10 my-1 font-medium md:my-4">
      <a href={link}>{name}</a>
    </li>
  );
};

export default Link;
