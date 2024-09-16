import React from "react";

function ForgotPassword() {
  return (
    <div>
        <div className="w-full mb-8">
        <h1 className="text-3xl font-bold text-red-500 relative ml-20">
          PetPal
        </h1>
        <div className="w-full h-0.5 bg-gray-400 mt-2"></div>
      </div>
    <div className="w-full h-screen flex justify-center items-center">

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-4">Reset Password</h3>
        <p className="text-sm mb-4">Please enter your details</p>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Enter Your Email*"
            className="placeholder:text-black bg-transparent py-2 my-2 border-b border-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="New Password*"
            className="placeholder:text-black bg-transparent py-2 my-2 border-b border-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password*"
            className="placeholder:text-black bg-transparent py-2 my-2 border-b border-black focus:outline-none"
          />
          <button className="text-white bg-red-500 py-2 my-4 w-full rounded hover:bg-red-700">
            Reset Password
          </button>
          <div className="text-sm mt-2">
            <p>
              Don't have an Account?{" "}
              <a href="#" className="text-blue-600 hover:underline">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default ForgotPassword;
