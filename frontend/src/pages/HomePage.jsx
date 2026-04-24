import React from 'react';
import { useNavigate } from 'react-router-dom';

const TEAM_NAME = 'TEAM BLUE';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">{TEAM_NAME}</span>
        <div className="navbar-links">
          <button className="nav-btn" onClick={() => navigate('/add')}>Add Member</button>
          <button className="nav-btn" onClick={() => navigate('/view')}>View Members</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="home-hero">
        <h1 className="home-team-name">
          TEAM <span>BLUE</span>
        </h1>
        <p className="home-subtitle">Welcome to the BLUE Team Management</p>

        <div className="home-card">
          <h2>Manage Team</h2>
          <div className="home-actions">
            <button className="btn-primary" onClick={() => navigate('/add')}>
              Add Member
            </button>
            <button className="btn-secondary" onClick={() => navigate('/view')}>
              View Members
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
