import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const TEAM_NAME = 'TEAM BLUE';

function MemberDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://team-blue.onrender.com/members/${id}`)
      .then((res) => {
        setMember(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch member details.');
        setLoading(false);
      });
  }, [id]);

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
        <button className="btn-back" onClick={() => navigate('/view')}>
          ← Back to Members
        </button>

        {loading && <p className="loading-text">Loading member details...</p>}

        {error && <div className="alert alert-error">{error}</div>}

        {!loading && member && (
          <div className="details-card">
            {/* Profile Image */}
            <div className="details-img-wrapper">
              {member.image ? (
                <img
                  className="details-img"
                  src={`https://team-blue.onrender.com/uploads/${member.image}`}
                  alt={member.name}
                />
              ) : (
                <div className="details-img-placeholder">👤</div>
              )}
            </div>

            {/* Details Body */}
            <div className="details-body">
              <h2 className="details-name">{member.name}</h2>
              <p className="details-degree-year">{member.degree} · {member.year}</p>

              <hr className="details-divider" />

              <div className="details-field">
                <div className="details-field-label">Roll Number</div>
                <div className="details-field-value">{member.roll}</div>
              </div>

              <div className="details-field">
                <div className="details-field-label">Email / Contact</div>
                <div className="details-field-value">{member.email}</div>
              </div>

              {member.aboutProject && (
                <div className="details-field">
                  <div className="details-field-label">Project</div>
                  <div className="details-field-value">{member.aboutProject}</div>
                </div>
              )}

              {member.certificate && (
                <div className="details-field">
                  <div className="details-field-label">Certificate</div>
                  <div className="details-field-value">{member.certificate}</div>
                </div>
              )}

              {member.internship && (
                <div className="details-field">
                  <div className="details-field-label">Internship</div>
                  <div className="details-field-value">{member.internship}</div>
                </div>
              )}

              {member.aboutYourAim && (
                <div className="details-field">
                  <div className="details-field-label">About Your Aim</div>
                  <div className="details-field-value">{member.aboutYourAim}</div>
                </div>
              )}

              {member.hobbies && (
                <div className="details-field">
                  <div className="details-field-label">Hobbies</div>
                  <div className="hobbies-tags">
                    {member.hobbies.split(',').map((h, i) => (
                      <span className="hobby-tag" key={i}>{h.trim()}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MemberDetailsPage;
