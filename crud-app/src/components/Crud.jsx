import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEye,
  faPencilAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.css";

function Crud() {
  return (
    <div className="landing-page">
      <div className="header">
        <h1>Welcome to My CRUD App</h1>
        <p>Start managing your data here!</p>
      </div>
      <div className="crud-icons">
        <div className="crud-icon">
          <FontAwesomeIcon icon={faPlus} />
          <span>Create</span>
        </div>
        <div className="crud-icon">
          <FontAwesomeIcon icon={faEye} />
          <span>Read</span>
        </div>
        <div className="crud-icon">
          <FontAwesomeIcon icon={faPencilAlt} />
          <span>Update</span>
        </div>
        <div className="crud-icon">
          <FontAwesomeIcon icon={faTrash} />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
}

export default Crud;
