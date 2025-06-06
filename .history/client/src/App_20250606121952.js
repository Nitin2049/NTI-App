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
import CorporateTraining from "./components/CorporateTraining";
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
import CourseDataScience from "./pages/CourseDataScience";
import CourseVideoEditing from "./pages/CourseVideoEditing";
import CourseCloudComputing from "./pages/CourseCloudComputing";
import CourseSQL from "./pages/CourseSQL";
import CourseJava from "./pages/CourseJava";
import CoursePython from "./pages/CoursePython";
import CourseC from "./pages/CourseC";
import CourseCPP from "./pages/CourseCPP";
import PlacementSection from "./pages/PlacementSection";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/my-profile"
          element={
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/online-registration-form"
          element={<OnlineRegistrationForm />}
        />
        <Route path="/corporate-training" element={<CorporateTraining />} />
        <Route path="/placement" element={<PlacementSection/>} />
        
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/apply-for-certificate" element={<PrivateRoute><ApplyForCertificate /></PrivateRoute>} />
        <Route path="/download-certificate" element={<PrivateRoute><DownloadCertificate /></PrivateRoute>} />
        <Route path="/verify-certificate" element={<PrivateRoute><VerifyCertificate /></PrivateRoute>} />

        <Route path="/courses/digital-marketing" element={<CourseDigitalMarketing/>} />
        <Route path="/courses/business-analyst" element={<CourseBusinessAnalyst/>} />
        <Route path="/courses/hr" element={<CourseHR/>} />
        <Route path="/courses/software-testing" element={<CourseSoftwareTesting/>} />
        <Route path="/courses/automation-testing" element={<CourseAutomationTesting/>} />
        <Route path="/courses/web-development" element={<CouseWebDevelopment/>} />
        <Route path="/courses/graphic-design" element={<CourseGraphicDesign/>} />
        <Route path="/courses/data-science" element={<CourseDataScience/>} />
        <Route path="/courses/video-editing" element={<CourseVideoEditing/>} />
        <Route path="/courses/cloud-computing" element={<CourseCloudComputing/>} />
        <Route path="/courses/sql" element={<CourseSQL/>} />
        <Route path="/courses/java" element={<CourseJava/>} />
        <Route path="/courses/python" element={<CoursePython/>} />
        <Route path="/courses/c" element={<CourseC/>} />
        <Route path="/courses/cpp" element={<CourseCPP/>} />

      </Routes>

      <div>
        <h1>NTI Training School</h1>
        <Footer />
      </div>
    </>
  );
}

export default App;
