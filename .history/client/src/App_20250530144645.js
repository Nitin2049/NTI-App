import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OnlineRegistrationForm from "./pages/OnlineRegistrationForm";
import Certificate from "./pages/Certification";
import CorporateTraining from "./pages/CorporateTraining";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/OnlineRegistrationForm"
          element={<OnlineRegistrationForm />}
        />
        <Route path="/CorporateTraining" element={<CorporateTraining />} />
        <Route path="/Certificate" element={<Certificate />} />
      </Routes>

      <div>
        <h1>NTI Training School</h1>
        <Footer />
      </div>
    </>
  );
}

export default App;
