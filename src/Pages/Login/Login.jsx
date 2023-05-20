import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.name.value;
    const password = form.name.value;
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="hero my-10 bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link  className="label-text-alt link link-hover mt-4 font-bold">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-500 hover:bg-orange-800">Login</button>
            </div>
            <Link to='/signUp'>SignUp</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
