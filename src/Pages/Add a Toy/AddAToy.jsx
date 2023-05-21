import React, { useState } from "react";

const AddAToy = () => {
  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access all the form fields' values here
    console.log({
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subcategory,
      price,
      rating,
      quantity,
      description,
    });
  };

  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Add A Toy</h2>
      <form onSubmit={handleSubmit}> 
<div className="card-body px-10 bg-base-200 rounded-xl">
<div className="grid md:grid-cols-2 gap-5">
        <div className="mb-4">
          <label htmlFor="pictureUrl" className="block font-bold mb-1">
            Picture URL:
          </label>
          <input
            type="text"
            id="pictureUrl"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">
            Toy Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerName" className="block font-bold mb-1">
            Seller Name:
          </label>
          <input
            type="text"
            id="sellerName"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block font-bold mb-1">
            Seller Email:
          </label>
          <input
            type="email"
            id="sellerEmail"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subcategory" className="block font-bold mb-1">
            Sub-category:
          </label>
          <input
            type="text"
            id="subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block font-bold mb-1">
            Price:
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block font-bold mb-1">
            Rating:
          </label>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block font-bold mb-1">
            Available Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>


        </div>
        <div className="w-full px-20">
          <label htmlFor="description" className="block font-bold mb-1">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered w-full"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 mt-5 text-white px-4 py-2 w-full rounded"
        >
          Submit
        </button>
</div>
      </form>
    </div>
  );
};

export default AddAToy;
