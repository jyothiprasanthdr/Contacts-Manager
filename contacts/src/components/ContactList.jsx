import { useRef } from "react";
import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  const { contacts } = props;
  const inputE1 = useRef();
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList =
    contacts && contacts.length > 0 ? (
      contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            contact={contact}
            clickHandler={deleteContactHandler}
          />
        );
      })
    ) : (
      <div>No Contacts Available</div>
    );
  const getSearchTerm = () => {
    props.searchKeyword(inputE1.current.value);
  };
  return (
    <div className="container-md flex flex-col justify-center items-center mt-4 w-auto">
      <div className="flex justify-between items-center p-2 gap-10">
        <h2>Contact List</h2>

        <Link to="/add">
          <button className=" bg-blue-500 text-white px-2 py-1 border-2 rounded-lg">
            Add Contact
          </button>
        </Link>
      </div>
      <div className="flex gap-2 justify-center items-center   m-2">
        <input
          className="border-2 border-blue-600 w-80 p-2 rounded-xl"
          type="search"
          ref={inputE1}
          value={props.term}
          onChange={getSearchTerm}
          placeholder="Search Contacts"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="flex flex-col items-center gap-2 m-2 ">
        {renderContactList}
      </div>
    </div>
  );
};
export default ContactList;
