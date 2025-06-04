import React from 'react';
import './Home.css';
import ExploreTopPrograms from '../components/ExploreTopPrograms';
import UpcomingBatches from '../components/UpcomingBatches';
import TopCourses from '../components/TopCourses';
import Testimonials from '../components/Testimonials';
import FindTheRightCourse from '../components/FindTheRightCourse';
import OurPlacementPartners from '../components/OurPlacementPartners';
import RecentBlogs from '../components/RecentBlogs';








function Home() {
  return (
<div>
   <div className="home-container">
      <div className="home-content">
        <h1>Take the first step towards a successful career with our support and expertise</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search Your Favourite Course Today." />
          <button>🔍</button>
        </div>
      </div>

      <div className="home-image">
        <img
          src="https://via.placeholder.com/200x250.png?text=Your+Image+Here"
          alt="Student"
        />
        <div className="course-tag">
          <p>AutoCAD</p>
          <span>💰 8 LPA</span>
        </div>
      </div>

      <div className="home-features">
        <div className="feature-item">
          <i>🧠</i>
          <p>Learn The Essential Skills</p>
        </div>
        <div className="feature-item">
          <i>🎓</i>
          <p>Earn Certificates And Degrees</p>
        </div>
        <div className="feature-item">
          <i>🚀</i>
          <p>Get Ready for The Next Career</p>
        </div>
        <div className="feature-item">
          <i>🌐</i>
          <p>Master at Different Areas</p>
        </div>
      </div>
    </div>



<ExploreTopPrograms/>

<UpcomingBatches/>

<TopCourses/>

<Testimonials/>

<FindTheRightCourse/>

<OurPlacementPartners/>

<RecentBlogs/>




  </div>
  );
}

export default Home;
