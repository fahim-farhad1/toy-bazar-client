import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  console.log(user);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(
      `https://toy-bazar-server.vercel.app/mytoys?sellerEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);


  const handelDelete = _id =>{
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you Want to Delete it?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://toy-bazar-server.vercel.app/allToys/${_id}`,{
          method: 'DELETE'
        })
        .then( res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Toy has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }
  return (
    <div>
      <div className="overflow-x-auto w-full my-5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Seller</th>
              <th className="text-center">Toy name</th>
              <th className="text-center">Sub-category</th>
              <th className="text-center">Price</th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.map((toy) => (
              <>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img className=" rounded-lg" src={toy.imageUrl} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.displayName}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>

                  <td>{toy.toyName}</td>
                  <td>{toy.category}</td>
                  <td>${toy.price}</td>
                  <td className="text-center">{toy.quantity}</td>

                  <td>
                    <Link to={`/updateToy/${toy._id}`}><button className="btn bg-orange-500 mr-5">Update</button></Link>
                    <button 
                    onClick={() => handelDelete(toy._id)}
                    className="btn bg-orange-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
