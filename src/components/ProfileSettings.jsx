import React from "react";

function ProfileSettings() {
  return (
    <div className="px-4 py-4">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-96">
        <h1 className="text-3xl font-bold text-red-500">PetPal</h1>
        <ul className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 gap-x-10">
          <li><a href="#">Home</a></li>
          <li><a href="#">Task</a></li>
          <li><a href="#">Book</a></li>
          <li><a href="#">Vet</a></li>
        </ul>
      </div>

      <p className="text-2xl font-bold underline mt-10 mb-6">Account Settings</p>
      <div className="w-full h-0.5 bg-gray-400"></div>

      <p className="font-semibold underline mt-10">Your Information</p>

      <div className="flex flex-col md:flex-row items-start">
        <form className="flex flex-col mt-10 space-y-4 w-full max-w-sm">
          <div>
            <p>First Name*</p>
            <input
              type="text"
              className="w-full h-9 border border-black mb-2"
            />
          </div>
          <div>
            <p>Last Name*</p>
            <input
              type="text"
              className="w-full h-9 border border-black mb-2"
            />
          </div>
          <div>
            <p>Email*</p>
            <input
              type="text"
              className="w-full h-9 border border-black mb-2"
            />
          </div>
          <div>
            <p>Phone Number*</p>
            <input
              type="number"
              className="w-full h-9 border border-black mb-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileSettings;
