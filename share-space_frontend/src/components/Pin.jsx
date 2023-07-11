import React from "react";
import { urlFor } from "../client";

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  console.log(image.asset.url);
  return (
    <img className="rounded-lg w-full" src={image.asset.url} alt="user-post" />
  );
};

export default Pin;
