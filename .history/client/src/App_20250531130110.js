import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
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
import ApplyForCertificate from "./pages/ApplyForCertificate";
import DownloadCertificate from "./pages/DownloadCertificate";
import VerifyCertificate from "./pages/VerifyCertificate";
import CourseDigitalMarketing from "./pages/CourseDigitalMarketing";
import CourseBusinessAnalyst from "./pages/CourseBusinessAnalyst";
import CourseHR from "./pages/CourseHR";
import CourseSoftwareTesting from "./pages/CourseSoftwareTesting";
import CourseAutomationTesting from "./pages/CourseAutomationTesting";
import CouseWebDevelopment from "./pages/CourseWebDevelopment";
import CourseGraphicDesign from "./pages/CourseGraphicDesign";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/MyProfile"
          element={
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/OnlineRegistrationForm"
          element={<OnlineRegistrationForm />}
        />
        <Route path="/CorporateTraining" element={<CorporateTraining />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/ApplyForCertificate" element={<PrivateRoute><ApplyForCertificate /></PrivateRoute>} />
        <Route path="/DownloadCertificate" element={<PrivateRoute><DownloadCertificate /></PrivateRoute>} />
        <Route path="/VerifyCertificate" element={<PrivateRoute><VerifyCertificate /></PrivateRoute>} />

        <Route path="/courses/digital-marketing" element={<CourseDigitalMarketing/>} />
        <Route path="/courses/business-analyst" element={<CourseBusinessAnalyst/>} />
        <Route path="/courses/hr" element={<CourseHR/>} />
        <Route path="/courses/software-testing" element={<CourseSoftwareTesting/>} />
        <Route path="/courses/automation-testing" element={<CourseAutomationTesting/>} />
        <Route path="/courses/web-development" element={<CouseWebDevelopment/>} />
        <Route path="/courses/graphic-design" element={<CourseGraphicDesign/>} />

      </Routes>

      <div>
        <h1>NTI Training School</h1>
        <Footer />
      </div>
    </>
  );
}

export default App;
