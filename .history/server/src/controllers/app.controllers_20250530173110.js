import { User } from "../models/user.model.js";
import { OAuth2Client } from "google-auth-library";

const CLIENT_ID =
  "123689541575-cek9kchhnjp71uc0jl035a5dpqd8njrq.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

export const verifyTokenCtrl = async (req, res) => {
  const { token } = req.body;
  console.log("Received token:", token);

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
    const userProfile = await User.findOne({ email:email });

    if (!userProfile) {
      console.log("User not found for email:", email);
      const newUser = new User({
        name,
        email,
        studentId,
      });

      await newUser.save();
    }

    console.log("Found User:", userProfile);
    res.json(userProfile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
