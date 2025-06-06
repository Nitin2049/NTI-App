import './AboutUs.css';

import OurStory from '../components/OurStory';
import OurMission from '../components/OurMission';
import MeetTeam from '../components/MeetTeam';
import WhyDucat from '../components/WhyDucat';


const AboutUs = () => {
  return (
    <div> 
    <section className="about-section">
      <div className="about-content">
        <h2>About NTI India</h2>
        <p>
          Empowering careers through quality IT education since 2001. Discover our journey,
          mission, and values.
        </p>
      </div>
    </section>


<OurStory/>
<OurMission/>
<MeetTeam/>
<WhyDucat/>


    </div>
    



  );
};

export default AboutUs;