import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/editlawyer.module.css";
const EditClient = () => {
  // Initialize state variables for the form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [about, setAbout] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, place, about, email);
    // Create an object to hold the form data
    const formData = {
      name,
      place,
      about,
    };

    // You can now send this formData to your backend or perform any desired action
  };

  return (
    <div className={`container mt-5 ${styles.formContainer} p-4`}>
      <h2 className="text-2xl mb-4 ">Client Information</h2>
      <h2 className="text-xl mb-8 ">Enter your info</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="place" className="form-label">
            Place
          </label>
          <input
            type="text"
            className="form-control"
            id="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="about" className="form-label">
            About (1000 words)
          </label>
          <textarea
            className="form-control"
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary bg-primary">
          <Link to="/client-form">
          Submit
          </Link>
        </button>
      </form>
    </div>
  );
};

export default EditClient;
