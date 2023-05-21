import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="hero my-10 bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <h1 className="text-3xl text-center font-bold">Login now!</h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover mt-4 font-bold">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-500 hover:bg-orange-800 w-full">
                Login
              </button>
            </div>
            <div className="flex mt-3">
              <p className="mt-3">Don't have an Account?</p>{""}
              <Link to="/signUp"><button className="btn btn-link"> Please Signup</button></Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
