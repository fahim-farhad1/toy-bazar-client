import React from "react";
import { useLoaderData } from "react-router-dom";

const Toy = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {imageUrl, toyName, seller, sellerEmail, price, rating, quantity, details} = toy;
  return (
    <div className="card card-side bg-base-100 ">
      <figure>
        <img
          src={imageUrl}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>{seller}</p>
        <p>{sellerEmail}</p>
        <p>{price}</p>
        <p>{rating}</p>
        <p>{quantity}</p>
        <p>{details}</p>
        
      </div>
    </div>
  );
};

export default Toy;
