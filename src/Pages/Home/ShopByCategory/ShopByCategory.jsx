import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  // const {toyName, price, rating} = toys;
  useEffect(() => {
    fetch("https://toy-bazar-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data.slice(0, 5)));
  }, [toys]);
  return (
    <div className="my-5">
      <p className="md:text-4xl text-center font-bold text-orange-500">
        Shop by category
      </p>
      <Tabs>
        <TabList className="text-center pt-5">
          <Tab>Marvel</Tab>
          <Tab>Avengers </Tab>
          <Tab>Star Wars</Tab>
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
                      <Link to={`toys/${toy._id}`}><button className="btn btn-primary">View Details</button></Link>
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
