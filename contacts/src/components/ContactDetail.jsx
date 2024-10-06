import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.jpg";
import { useLocation } from "react-router-dom";

const ContactDetail = (props) => {
  const location = useLocation();

  const { name, email } = location.state || {};

  return (
    <div className="flex flex-col items-center">
      <div className="container mt-10 flex flex-col justify-center mx-auto w-56 items-center min-h-full border-2 border-gray-200 rounded-lg shadow-md ">
        <div className="flex flex-col  h-64 w-96 border-1 mx-auto border-black ">
          <img src={user} alt="user" className="h-48 w-56  object-fit mb-2 " />
          <div className="font-semibold px-2">{name}</div>
          <div className="text-sm text-gray-600 px-2">{email}</div>
        </div>
      </div>
      <div className=" mx-auto mt-2">
        <Link to="/">
          <button className=" bg-blue-500 text-white px-2 py-1 border-2 rounded-lg">
            Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
