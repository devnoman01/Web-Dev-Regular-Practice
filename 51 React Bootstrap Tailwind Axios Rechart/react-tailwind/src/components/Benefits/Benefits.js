import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const Benefits = (props) => {
  return (
    <p className="flex items-center my-1 font-medium hover:text-green-600 duration-200 ease-in">
      <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500"></CheckCircleIcon>
      {props.benefit}
    </p>
  );
};

export default Benefits;
