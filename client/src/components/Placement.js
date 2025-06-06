import React from 'react';
import './Placement.css';

const placementData = [
  {
    name: 'Ashutosh Kumar Jha',
    profile: 'Program Analyst',
    package: '8.5 LPA',
    company: 'EbixCash',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Lovekush',
    profile: 'Software Developer',
    package: '3.5 LPA',
    company: 'MS Technology',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sachin Charkhwal',
    profile: 'Web Designer',
    package: '2 LPA',
    company: 'Paytel Financial Technologies P.Ltd.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Abhishek Chauhan',
    profile: 'Manual Testing Engineer',
    package: '4.2 LPA',
    company: 'Vivo India P.Ltd.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Kishan Gupta',
    profile: 'Software Developer',
    package: '2 LPA',
    company: 'Webcity Technologies LLP',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Deepak Kumar',
    profile: 'Software Developer',
    package: '2 LPA',
    company: 'BIZCLOCK INFOTECH',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Rahul Sain',
    profile: 'AutoCAD Designer',
    package: '',
    company: 'OBJECTIFY TECHNOLOGIES',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bhubnesh Verma',
    profile: 'AutoCAD Designer',
    package: '',
    company: 'OBJECTIFY TECHNOLOGIES',
    image: 'https://via.placeholder.com/150',
  },
];

const Placement = () => {
  return (
    <div className="placement-section">
      <h2 className="placement-heading">Our Successful Students</h2>
      <div className="placement-cards">
        {placementData.map((student, index) => (
          <div className="placement-card" key={index}>
            <div className="placement-image">
              <img src={student.image} alt={student.name} />
            </div>
            <h3>{student.name}</h3>
            <p><strong>Job Profile :</strong> {student.profile}</p>
            <p><strong>Package :</strong> {student.package}</p>
            <p><strong>Company :</strong> {student.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placement;