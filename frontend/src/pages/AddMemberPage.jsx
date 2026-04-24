import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TEAM_NAME = 'TEAM BLUE';

function AddMemberPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    year: '',
    degree: '',
    email: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aboutYourAim: '',
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const validate = () => {
    const { name, roll, year, degree, email } = formData;
    if (!name.trim()) return 'Name is required.';
    if (!roll.trim()) return 'Roll Number is required.';
    if (!year.trim()) return 'Year is required.';
    if (!degree.trim()) return 'Degree is required.';
    if (!email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Enter a valid email address.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (image) {
      data.append('image', image);
    }

    try {
      await axios.post('https://team-blue.onrender.com/members', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccessMsg('Member added successfully!');
      setFormData({
        name: '', roll: '', year: '', degree: '', email: '',
        aboutProject: '', hobbies: '', certificate: '',
        internship: '', aboutYourAim: '',
      });
      setImage(null);
      e.target.reset();
    } catch (err) {
      setErrorMsg('Failed to add member. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">{TEAM_NAME}</span>
        <div className="navbar-links">
          <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
          <button className="nav-btn" onClick={() => navigate('/view')}>View Members</button>
        </div>
      </nav>

      <div className="page-wrapper">
        <h1 className="page-title">Add Team Member</h1>

        <div className="form-card">
          {successMsg && <div className="alert alert-success">{successMsg}</div>}
          {errorMsg && <div className="alert alert-error">{errorMsg}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Roll Number *</label>
              <input
                type="text"
                name="roll"
                placeholder="Roll Number"
                value={formData.roll}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Year *</label>
              <input
                type="text"
                name="year"
                placeholder="e.g. 2024"
                value={formData.year}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Degree *</label>
              <input
                type="text"
                name="degree"
                placeholder="e.g. B.Tech"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>About Project</label>
              <textarea
                name="aboutProject"
                placeholder="Describe your project..."
                value={formData.aboutProject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Hobbies (comma separated)</label>
              <input
                type="text"
                name="hobbies"
                placeholder="e.g. reading, gaming, coding"
                value={formData.hobbies}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Certificate</label>
              <input
                type="text"
                name="certificate"
                placeholder="e.g. Fullstack, AWS"
                value={formData.certificate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Internship</label>
              <input
                type="text"
                name="internship"
                placeholder="e.g. Cloud Computing"
                value={formData.internship}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>About Your Aim</label>
              <textarea
                name="aboutYourAim"
                placeholder="What is your aim?"
                value={formData.aboutYourAim}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Profile Photo (Upload Image)</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <button type="submit" className="form-submit-btn" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMemberPage;
