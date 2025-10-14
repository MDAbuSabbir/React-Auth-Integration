import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Register now!</h1>
          <form>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <button type="button" className=" btn-neutral mt-4">
              Already have an Acccount? Please
              <Link
                to={"/login"}
                className="text-blue-600 ml-1 font-bold hover:underline"
              >
                Login
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
