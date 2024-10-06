import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const DeleteContact = ({ getContactId }) => {
  const location = useLocation();

  const { id } = location.state;

  const removeContact = () => {
    getContactId(id);
  };
  return (
    <div className="container-lg flex flex-col items-center justify-center  w-full  m-auto mt-10 gap-4 border-2 p-4 shadow-md rounded-lg">
      <p>Want to delete contact for sure?</p>
      <div>
        <Link to="/">
          <button
            className=" bg-blue-500 text-white px-2 py-1 border-2 rounded-lg mx-3"
            onClick={removeContact}
          >
            Yes
          </button>
          <button className=" bg-blue-500 text-white px-2 py-1 border-2 rounded-lg mx-3">
            No
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeleteContact;
