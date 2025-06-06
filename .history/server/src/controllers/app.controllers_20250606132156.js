import { User } from "../models/user.model.js";
import { OAuth2Client } from "google-auth-library";
import { Enquiry } from "../models/enquiryForm.model.js";
import { ApplyForCertificate } from "../models/ApplyForCertificate.model.js";
import { Registration } from "../models/registrationForm.model.js";

const CLIENT_ID =
  "123689541575-cek9kchhnjp71uc0jl035a5dpqd8njrq.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

export const verifyTokenCtrl = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const userid = payload["sub"];

    console.log("User ID:", userid);
    console.log("payload:", payload);

    res.status(200).json({ success: true, user: payload });
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token", error });
  }
};

export const userProfileCtrl = async (req, res) => {
  try {
    const { name, email, studentId } = req.body; // Use query parameter for email
    console.log("Fetching user profile for email:", email);
    const userProfile = await User.findOne({ email: email });

    if (!userProfile) {
      console.log("User not found for email:", email);
      await User.create({
        name,
        email,
        studentId,
      });
      console.log("New user created:", { name, email, studentId });
    }

    console.log("Found User:", userProfile);
    res.json(userProfile);
  } catch (error) {
    console.error("Error saving user data:", error.message, error.stack);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};

export const enquiryFormCtrl = async (req, res) => {
  try {
    const { name, email, phone, center, course, companyName, message } =
      req.body;
    console.log("Received enquiry data:", req.body);
    // await Enquiry.create({
    //   name,
    //   email,
    //   phone,
    //   center,
    //   course,
    //   companyName,
    //   message,
    // });
    res
      .status(200)
      .json({ success: true, message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error("Error processing enquiry form:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to submit enquiry", error });
  }
};

export const applyForCertificateCtrl = async (req, res) => {
  try {
    const { name, email, phone, center, course, studentId } = req.body;
    console.log("Received certificate application data:", req.body);
    await ApplyForCertificate.create({
      name,
      email,
      phone,
      center,
      course,
      studentId,
    });

    res.status(200).json({
      success: true,
      message: "Certificate application submitted successfully",
    });
  } catch (error) {
    console.error("Error processing certificate application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit certificate application",
      error: error.message,
    });
  }
};

export const onlineRegistrationCtrl = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      branch,
      course,
      address,
      city,
      country,
      pincode,
    } = req.body;

    console.log("Received online registration data:", req.body);
    await Registration.create({
      name,
      email,
      phone,
      branch,
      course,
      address,
      city,
      country,
      pincode,
    });

    res.status(200).json({
      success: true,
      message: "Online registration successful",
    });
  } catch (error) {
    console.error("Error processing online registration:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process online registration",
      error: error.message,
    });
  }
};
