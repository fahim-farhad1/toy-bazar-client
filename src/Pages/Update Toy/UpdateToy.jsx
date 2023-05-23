import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";

const UpdateToy = () => {
    useTitle('Update-Toy');
    const navigate = useNavigate
  const toys = useLoaderData();
    const {price, _id, quantity} = toys;

  const handelForm = (e) =>{
    e.preventDefault();
    

    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const updatedToy = {
      price,
      quantity,
      details
    }
    console.log(updatedToy);
    fetch(`https://toy-bazar-server.vercel.app/allToys/${_id}`,{
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedToy)
    })
    .then( res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire(
          'Success!',
          'Toy add Successfully',
          'success'
        )
      }
      
    })

  }
  return (
    <div>
      <form onSubmit={handelForm} className=" bg-slate-100 p-10">
        <div className="max-w-xs mx-auto w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            defaultValue={price}
            className="input input-bordered w-full max-w-xs"

          />
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Quantity"
            name="quantity"
            defaultValue={quantity}

            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="details"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />
          <input type="submit" value="Update Toy" className="btn bg-orange-500 w-full mt-5" />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
