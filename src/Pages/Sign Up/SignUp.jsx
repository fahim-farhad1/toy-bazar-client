import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the form
    setName("");
    setEmail("");
    setPassword("");
    createUser(email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-center">
      <form
        className="bg-white shadow-md rounded px-1o  mt-7"
        onSubmit={handleSubmit}
      >
        <div className="card-body">
        <h1 className="text-3xl text-center font-bold mb-2">Registration now!</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="input input-bordered"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="input input-bordered"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Photo Url
            </label>
            <input
              className="input input-bordered"
              id="photoUrl"
              type="text"
              placeholder="Photo Url"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
           </label>
            <input
              className="input input-bordered"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="btn bg-orange-500 hover:bg-orange-800 text-center w-full"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex mt-3">
            <p className="mt-3">Have an Account?</p>
            {""}
            <Link to="/login">
              <button className="btn btn-link"> Please Login</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
