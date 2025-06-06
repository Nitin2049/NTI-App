import React from 'react';
import './MeetTeam.css';

const teamMembers = [
  {
    initials: 'AK',
    name: 'Mr. Ravi Kumar Mishra',
    role: 'Founder & CEO',
  },
  {
    initials: 'SS',
    name: 'Ms. Sunita Sharma',
    role: 'Head of Academics',
  },
  {
    initials: 'RS',
    name: 'Mr. Rajeev Singh',
    role: 'Placement Director',
  },
];

const MeetTeam = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Core Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="avatar-circle">{member.initials}</div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTeam;