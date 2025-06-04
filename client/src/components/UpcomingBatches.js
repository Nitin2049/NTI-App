import React from 'react';
import './UpcomingBatches.css';

const batches = [
  {
    title: "WEB DESIGNING",
    branch: "Ghaziabad",
    date: "31-05-2025",
  },
  {
    title: "CYBER SECURITY",
    branch: "Ghaziabad",
    date: "31-05-2025",
  },
  {
    title: "ADVANCE DIGITAL MARKETING",
    branch: "Gurugram",
    date: "31-05-2025",
  },
  {
    title: "AUTOCAD",
    branch: "Noida Sector 16",
    date: "31-05-2025",
  },
];

function UpcomingBatches() {
  return (
    <div className="upcoming-batches-container">
      <h2>Upcoming Batches (Select a Branch)</h2>

      <div className="branch-select">
        <select>
          <option>All</option>
          <option>Ghaziabad</option>
          <option>Gurugram</option>
          <option>Noida</option>
        </select>
      </div>

      <div className="batches-grid">
        {batches.map((batch, index) => (
          <div className="batch-card" key={index}>
            <div className="batch-rating">
              <span>⭐️⭐️⭐️⭐️</span>
            </div>
            <div className="batch-content">
              <div className="batch-icon">
                <img src="NTI-logo_color.png" alt={batch.title} />
              </div>
              <h3>{batch.title}</h3>
              <p><strong>Branch:</strong> {batch.branch}</p>
              <p><strong>Starting Date:</strong> {batch.date}</p>
              <button>✅ Request A Call Back</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingBatches;
