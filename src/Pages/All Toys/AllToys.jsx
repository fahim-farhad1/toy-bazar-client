import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AllToys = () => {
  const navigate = useNavigate();
  const [Toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://toy-bazar-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data.slice(0, 20)));
  }, []);

  const handelShowMore = () => {
    fetch("https://toy-bazar-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  const handelModal = () => {
    Swal.fire({
      title: "You have to Login first to view details",
      showCancelButton: true,
      confirmButtonText: "Login",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  return (
    <div>
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
            {Toys.map((toy) => (
              <>
                {" "}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{toy.seller}</div>
                        <div className="text-sm opacity-50">
                          {toy.sellerEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{toy.toyName}</td>
                  <td>{toy.category}</td>
                  <td>${toy.price}</td>
                  <td>{toy.quantity}</td>
                  <th>
                    <div>
                      {user ? (
                        <Link to={toy._id}>
                          {" "}
                          <button className="btn bg-orange-600">
                            View Details
                          </button>{" "}
                        </Link>
                      ) : (
                        <button
                          onClick={handelModal}
                          className="btn bg-orange-600"
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center my-5">
        <button
          className="btn rounded-xl bg-orange-500 hover:bg-orange-800"
          onClick={handelShowMore}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default AllToys;
