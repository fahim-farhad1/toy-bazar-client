import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const ShopByCategory = () => {
  const navigate = useNavigate();
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("");
  const { user } = useContext(AuthContext);
  // const {toyName, price, rating} = toys;
  useEffect(() => {
    fetch(`https://toy-bazar-server.vercel.app/toys?category=${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);

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
    <div className="my-5">
      <p className="md:text-4xl text-center font-bold text-orange-500">
        Shop by category
      </p>
      <Tabs>
        <TabList className="text-center pt-5">
          <Tab onClick={() => setCategory("Marvel")}>Marvel</Tab>
          <Tab onClick={() => setCategory("Transformers")}>Transformer </Tab>
          <Tab onClick={() => setCategory("Star Wars")}>Star Wars</Tab>
        </TabList>

        <TabPanel className="">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure></figure>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
              {toys.map((toy) => (
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.toyName}</h2>
                    <h2 className="card-title">{toy.price}</h2>
                    <h2 className="card-title">{toy.rating}</h2>
                    {/* Modal Section */}
                    <div className="card-actions justify-end">
                      {user ? (
                        <Link to={`/allToys/${toy._id}`}>
                          <button className="btn bg-orange-600">
                            View Details
                          </button>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel className="">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure></figure>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
              {toys.map((toy) => (
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.toyName}</h2>
                    <h2 className="card-title">{toy.price}</h2>
                    <h2 className="card-title">{toy.rating}</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel className="">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure></figure>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
              {toys.map((toy) => (
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.toyName}</h2>
                    <h2 className="card-title">{toy.price}</h2>
                    <h2 className="card-title">{toy.rating}</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
