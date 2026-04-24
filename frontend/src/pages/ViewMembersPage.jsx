import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TEAM_NAME = 'TEAM BLUE';

function ViewMembersPage() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://team-blue.onrender.com/members')
      .then((res) => {
        setMembers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch members. Make sure the backend is running.');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">{TEAM_NAME}</span>
        <div className="navbar-links">
          <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
          <button className="nav-btn" onClick={() => navigate('/add')}>Add Member</button>
        </div>
      </nav>

      <div className="page-wrapper">
        <h1 className="page-title">MEET OUR AMAZING TEAM</h1>

        {loading && <p className="loading-text">Loading members...</p>}

        {error && <div className="alert alert-error">{error}</div>}

        {!loading && !error && members.length === 0 && (
          <div className="empty-state">
            <p>No team members found.</p>
            <button className="btn-primary" onClick={() => navigate('/add')}>
              Add First Member
            </button>
          </div>
        )}

        {!loading && members.length > 0 && (
          <div className="members-grid">
            {members.map((member) => (
              <div className="member-card" key={member._id}>
                {member.image ? (
                  <img
                    className="member-card-img"
                    src={`https://team-blue.onrender.com/uploads/${member.image}`}
                    alt={member.name}
                  />
                ) : (
                  <div className="member-card-img-placeholder">👤</div>
                )}
                <div className="member-card-body">
                  <div className="member-card-name">{member.name}</div>
                  <div className="member-card-roll">Roll Number: {member.roll}</div>
                  <button
                    className="btn-view-details"
                    onClick={() => navigate(`/member/${member._id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewMembersPage;
