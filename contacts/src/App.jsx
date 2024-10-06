import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import uuid4 from "uuid4";
import ContactDetail from "./components/ContactDetail";
import api from "./api/contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeleteContact from "./components/DeleteContact";
import EditContact from "./components/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm);
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };
  retrieveContacts();

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = { id: uuid4(), ...contact };
    const response = await api.post("/contacts", request);

    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id == id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <div className="  container-lg m-auto w-1/2  ">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path={"/edit/:id"}
            element={<EditContact ContactHandler={updateContactHandler} />}
          ></Route>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route
            path="/delete/:id"
            element={<DeleteContact getContactId={removeContactHandler} />}
          ></Route>
        </Routes>

        {/* // <AddContact addContactHandler={addContactHandler} />
        //{" "}
        <ContactList contacts={contacts} getContactId={removeContactHandler} />
        //{" "} */}
      </Router>
    </div>
  );
};

export default App;
