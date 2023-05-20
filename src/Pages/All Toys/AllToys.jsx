import React, { useEffect, useState } from "react";
import SingleToyDetails from "./SingleToyDetails";

const AllToys = () => {
  const [Toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://toy-bazar-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data.slice(0, 20)));
  }, []);

  const handelShowMore = () =>{
    fetch("https://toy-bazar-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }
  return <div>
    {
        Toys.map(singleToyInfo => <SingleToyDetails
        key={singleToyInfo._id}
        singleToyInfo = {singleToyInfo}
        ></SingleToyDetails>)
    }
    <div className="text-center my-5">
      <button className="btn rounded-xl bg-orange-500 hover:bg-orange-800" onClick={handelShowMore}>Show More</button>
    </div>
  </div>
};

export default AllToys;
