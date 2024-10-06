import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { name, email, id } = props.contact;

  return (
    <div>
      <div className="flex justify-between items-center  mx-auto  p-1 m-1  border-2 rounded-lg border-blue-200 w-96 h-16">
        <div className="flex items-center">
          <div>
            <i className="fa-solid fa-user fa-2xl p-1 m-1 rounded-full "></i>
          </div>
          <Link to={`/contact/${id}`} state={{ name, email }}>
            <div className="px-1 my-1 mx-2">{name}</div>
            <div className="px-1 my-1 mx-2">{email}</div>
          </Link>
        </div>

        <div className="flex ">
          <div>
            <Link to={`/edit/${id}`} state={{ name, email, id }}>
              <i className="fa-solid fa-edit fa-xl p-2  "></i>
            </Link>
          </div>
          <div>
            <Link to={`/delete/${id}`} state={{ id }}>
              <i className="fa-solid fa-trash fa-xl p-2  "></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
