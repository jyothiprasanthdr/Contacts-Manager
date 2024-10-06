import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are required");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center m-4 p-4 gap-4">
      <form onSubmit={submitHandler}>
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
            Add
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

export default AddContact;
