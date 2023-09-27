import React, { useState } from 'react';

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    profilePicture: null,
    gender: '',
    email: '',
    dateOfBirth: '',
    phoneNumber: '',
    location: '',
    timeZone: '',
    language: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    // Use spread operator to copy the existing formData and update the changed field
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log(formData);
  };
  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profilePicture" className="form-label">
            Profile Picture
          </label>
          <input
            type="file"
            className="form-control"
            id="profilePicture"
            name="profilePicture"
            onChange={handleInputChange}
            accept=".jpg, .jpeg, .gif, .png"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Please specify your gender</label>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleInputChange}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleInputChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="preferNotToSay"
              name="gender"
              value="Prefer not to say"
              checked={formData.gender === 'Prefer not to say'}
              onChange={handleInputChange}
            />
            <label htmlFor="preferNotToSay">Prefer not to say</label>
          </div>
        </div>
        {/* Continue with other form fields using the same pattern */}
        <button type="submit" className="btn btn-primary">
          <Link> helkl
          </Link>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserProfileForm;
