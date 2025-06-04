import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import OnlineRegistrationForm from './pages/OnlineRegistrationForm';
import Certificate from './pages/Certification';
import CorporateTraining from './pages/CorporateTraining';

 

function App() {
  return (
    <Router>

<Header/>
{/* 
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/contact">Contact</Link>

      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/OnlineRegistrationForm" element={<OnlineRegistrationForm />} />
        <Route path="/CorporateTraining" element={<CorporateTraining />} />
        <Route path="/Certificate" element={<Certificate />} />
      </Routes>


      <div>
      <h1>NTI Training School</h1>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
