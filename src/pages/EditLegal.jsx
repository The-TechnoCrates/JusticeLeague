import React, { useState } from 'react';
import styles from "../styles/editlawyer.module.css";
const Edit = () => {
  // Initialize state variables for the form inputs
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [experience, setExperience] = useState('');
  const [casesSolved, setCasesSolved] = useState('');
  const [practicingArea, setPracticingArea] = useState('');
  const [category, setCategory] = useState('');
  const [about, setAbout] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to hold the form data
    const formData = {
      name,
      place,
      experience,
      casesSolved,
      practicingArea,
      category,
      about,
    };

    // You can now send this formData to your backend or perform any desired action
  };

  return (

    <div className={`container mt-5 ${styles.formContainer} p-4`} >
      <h2 className='text-xl mb-10 '>Legal Professional Information</h2>
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
          <label htmlFor="experience" className="form-label">
            Experience
          </label>
          <input
            type="text"
            className="form-control"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="casesSolved" className="form-label">
            Cases Solved
          </label>
          <input
            type="text"
            className="form-control"
            id="casesSolved"
            value={casesSolved}
            onChange={(e) => setCasesSolved(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="practicingArea" className="form-label">
            Practicing Area
          </label>
          <input
            type="text"
            className="form-control"
            id="practicingArea"
            value={practicingArea}
            onChange={(e) => setPracticingArea(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category/Fields of Work
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
        <button type="submit" className=" bg-primary btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
