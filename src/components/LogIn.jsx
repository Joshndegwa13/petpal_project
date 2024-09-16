import React from "react";
import login from "../assets/Images/login.jpg";

function LogIn() {
  return (
    <div>
       <div className="w-full mb-8">
        <h1 className="text-3xl font-bold text-red-500 relative ml-20">
          PetPal
        </h1>
        <div className="w-full h-0.5 bg-gray-400 mt-2"></div>
      </div>

    <div className="w-full min-h-screen flex justify-center items-center py-12">
      <div className="w-full max-w-4xl bg-white shadow-lg flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
        <div className="relative w-full md:w-1/2 h-48 md:h-auto">
          <img src={login} alt="login" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">LogIn</h3>
          <p className="text-sm mb-4">Welcome back! Please enter your details</p>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Enter Your Email*"
              className="placeholder:text-black bg-transparent py-2 my-2 border-b border-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password*"
              className="placeholder:text-black bg-transparent py-2 my-2 border-b border-black focus:outline-none"
            />
            <button className="text-white bg-red-500 py-2 my-4 w-full rounded hover:bg-red-700">
              LogIn
            </button>
            <div className="text-sm mt-2">
              <p className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
              </p>
              <p>
                Don't have an Account?{" "}
                <a href="#" className="text-blue-600 hover:underline">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LogIn;
