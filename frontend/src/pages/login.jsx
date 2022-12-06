import React from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import "../assets/css/main.css";

function Login() {

  function handleSubmit() {
    console.log("hi")
  }

  return (
    <div className="flex flex-col" id="container">
      <div style={{backgroundColor : "rgb(92, 37, 104)"}} className="text-white w-full text-center py-2">
        <h1 className="text-2xl">Hello!</h1>
        <p className="mt-2">Please provide your email along with your password to login. </p>
      </div>
      <div className="h-screen m-auto text-center mt-5">
          <h1 className="mb-3 text-2xl">Sign In</h1>
          <div className="flex flex-col">
            <input className="p-2 rounded m-2 bg-gray-200" type="email" placeholder="Email" />
            <input className="p-2 rounded m-2 bg-gray-200" type="password" placeholder="Password" />
          </div>
          <button onClick={handleSubmit} style={{backgroundColor : "rgb(92, 37, 104)"}} className="p-2 text-white rounded m-2"><Link to={"/home"}  >Get Started</Link></button>
      </div>
    </div>
  );
}

export default Login;
