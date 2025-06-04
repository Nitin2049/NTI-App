import './GetExpertGuidance.css';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const GetExpertGuidance = () => {
  return (
    <section className="geg-container">
      <div className="geg-content">
        <h1>
          Get expert guidance—<span>call or WhatsApp us today!!</span>
        </h1>
        <p>A roadmap for readying key roles in your organization for business in the digital age.</p>
        <div className="geg-contacts">
          <div className="geg-contact">
            <FaPhoneAlt className="icon phone" />
            <a href="tel:+917070905090">+91-7070905090</a>
          </div>
          <div className="geg-contact">
            <FaWhatsapp className="icon whatsapp" />
            <a href="https://wa.me/07662-462289" target="_blank" rel="noopener noreferrer">
              9174253016
            </a>
          </div>
        </div>
      </div>

      <div className="geg-illustration">
        <img src="pp.png" alt="Expert Guidance" />
      </div>
    </section>
  );
};

export default GetExpertGuidance;
