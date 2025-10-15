// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthorizationContext } from "../Contexts/AuthContext";
// import { auth } from "../Firebase Configaration/Firebase.config";

const Register = () => {
  const {createUser} = use(AuthorizationContext)
  
    const handleRegister = (e) =>{
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      
      createUser(email, password)
      .then(result =>{
        console.log(result.user)
      })
      .catch(error =>{
        console.log(error.message)
      })
      
    }
    // const handleRegister = (e) =>{
    //     e.preventDefault()
    //     const name = e.target.name.value
    //     const email = e.target.email.value
    //     const password = e.target.password.value
    //     console.log(email, password,name)
    //     createUserWithEmailAndPassword(auth,email,password)
    //     .then(result =>{
    //         console.log(result.user)
    //     })
    //     .catch(error =>{
    //         console.log(error.message)
    //     })
    // }
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
                 { /* Name Filed */ }
              <label className="label">Name</label>
              <input type="text" className="input" name="name" placeholder="Name" />
                {/* /* Email Filed */ }
              <label className="label">Email</label>
              <input type="email" className="input" name="email" placeholder="Email" />

              {/* /* Password Filed */ }
              <label className="label">Password</label>
              <input type="password" className="input" name="password" placeholder="Password" />
              
              <button className="btn btn-neutral mt-4">Register</button>
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
