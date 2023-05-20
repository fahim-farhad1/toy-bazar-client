import React from "react";
import { Link } from "react-router-dom";

const SingleToyDetails = ({ singleToyInfo }) => {
  const { category, price, seller, sellerEmail, toyName, quantity, _id } =
    singleToyInfo;

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{seller}</div>
                  <div className="text-sm opacity-50">{sellerEmail}</div>
                </div>
              </div>
            </td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <th>
              <Link to={`allToys/${_id}`}>
                <button className="btn bg-orange-600">details</button>
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleToyDetails;
