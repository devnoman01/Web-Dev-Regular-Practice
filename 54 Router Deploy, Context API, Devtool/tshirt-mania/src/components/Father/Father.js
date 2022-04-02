import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../MySelf/Myself";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h4 style={{ margin: "0px" }}>Father</h4>
      <p>House: {house}</p>
      <div style={{ display: "flex" }}>
        <Myself house={house}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </div>
    </div>
  );
};

export default Father;
