import React from "react";

const Modal = ({ isOpen, closeModal, toy }) => {
  // Destructuring the toy object
  const {
    picture,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = toy;

  // Conditionally render the modal based on the isOpen prop
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white w-96 p-6 rounded-lg z-10">
        <div className="flex items-center mb-4">
          <img src={picture} alt="Toy" className="w-16 h-16 mr-4" />
          <h2 className="text-xl font-bold">{toyName}</h2>
        </div>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Seller:</span> {sellerName}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Email:</span> {sellerEmail}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Price:</span> {price}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Rating:</span> {rating}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Available Quantity:</span> {quantity}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-bold">Description:</span> {description}
        </p>
        <button
          onClick={closeModal}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
