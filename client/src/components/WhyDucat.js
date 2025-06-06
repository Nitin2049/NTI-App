import React from 'react';
import './WhyDucat.css';
import { FaAward, FaSuitcase, FaBookOpen } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaAward />,
    title: 'Quality Training',
    description: 'Industry-focused curriculum and expert trainers.',
  },
  {
    icon: <FaSuitcase />,
    title: 'Placement Support',
    description: 'Dedicated cell for 100% placement assistance.',
  },
  {
    icon: <FaBookOpen />,
    title: 'Practical Learning',
    description: 'Hands-on projects and real-world case studies.',
  },
];

const WhyDucat = () => {
  return (
    <section className="why-ducat">
      <h2>Why NTI?</h2>
      <div className="why-grid">
        {reasons.map((item, index) => (
          <div className="why-item" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDucat;