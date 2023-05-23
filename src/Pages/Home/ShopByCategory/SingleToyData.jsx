import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToyData = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {imageUrl, toyName, seller, sellerEmail, price, rating, quantity, details} = toy;
  return (
    <div className="card card-side bg-base-100 ">
      <figure>
        <img
        className="w-96"
          src={imageUrl}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><span>Name: </span>{toyName}</h2>
        <p><span className="font-bold ">Seller Name:</span><span>{seller}</span></p>
        <p><span className="font-bold ">Email: </span><span>{sellerEmail}</span></p>
        <p><span className="font-bold ">Price: $</span><span>{price}</span></p>
        <p><span className="font-bold ">Rating: </span><span>{rating}</span></p>
        <p><span className="font-bold ">Available Item: </span><span>{quantity}</span></p>
        <p><span className="font-bold ">Description: </span><span>{details}</span> </p>
        
      </div>
    </div>
  );
};

export default SingleToyData;
