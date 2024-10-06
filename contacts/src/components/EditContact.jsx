import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const EditContact = ({ ContactHandler }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const [name, setName] = useState(location.state.name);
  const [email, setEmail] = useState(location.state.email);
  const id = location.state.id;
  const updateHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are required");
      return;
    }
    ContactHandler({ name, email, id });
    // setName("");
    // setEmail("");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center m-4 p-4 gap-4">
      <form onSubmit={updateHandler}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 rounded-sm border-blue-300"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="border-2 rounded-sm border-blue-300"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="flex  p-2 mx-8">
          <button className="bg-blue-600 px-3 py-1 mx-4 border-2 rounded-md text-gray-300">
            Edit
          </button>
          <button
            type="reset"
            className="bg-blue-600 px-3 py-1 mx-4 border-2 rounded-md text-gray-300"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
