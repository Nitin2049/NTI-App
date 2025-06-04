import mongoose from "mongoose";
import { Enquiry } from "../models/enquiryForm.model.js";
import { Registration } from "../models/registrationForm.model.js";
import {ApplyForCertificate} from "../models/applyForCertificate.model.js";

export const datainitialise = async () => {
  // 4. Insert Sample Data
  const sampleRegistration = new Registration({
    name: "Tanu Rawat",
    email: "tanu.doe@example.com",
    phone: 9872354320,
    branch: "Pune",
    course: "Data Science",
    address: "123 Main St",
    city: "Bhopal",
    country: "India",
    pincode: 462001,
  });

  // 4. Insert Sample Data
  const sampleEnquiry = new Enquiry({
    name: "Garima Doe",
    email: "garima.doe@example.com",
    phone: 9876943210,
    center: "Pune",
    course: "Data Science",
    message: "I would like more information about the Data Science course.",
    companyName: "Tech Solutions",
  });

  const sampleApplyForCertificate = new ApplyForCertificate({
    name: "Garima Doe",
    email: "garima.doe@example.com",
    phone: 9876943210,
    center: "Pune",
    course: "Data Science",
    facultyName: "Dr. Smith",
    ntiStudentId: "NTI123456"
  });

  // Save ENQUIRY document
  sampleEnquiry
    .save()
    .then((doc) => {
      console.log("Enquiry saved:", doc);
    })
    .catch((err) => {
      console.error("Error saving enquiry:", err.message);
      mongoose.connection.close(); // Close DB connection
    });

  // Save REGISTRATION document
  sampleRegistration
    .save()
    .then((doc) => {
      console.log("Registration saved:", doc);
    })
    .catch((err) => {
      console.error("Error saving registration:", err.message);
      mongoose.connection.close(); // Close DB connection
    });

  sampleApplyForCertificate
    .save()
    .then((doc) => {
      console.log("ApplyForCetificate saved:", doc);
    })
    .catch((err) => {
      console.error("Error saving Apply For Certificate:", err.message);
      mongoose.connection.close(); // Close DB connection
    });
};
