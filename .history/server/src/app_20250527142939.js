import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { OAuth2Client } from "google-auth-library";

const app = express();

const CLIENT_ID =
  "123689541575-cek9kchhnjp71uc0jl035a5dpqd8njrq.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import routes
// import allRoutes from "./routes/app.routes.js";

// Use routes
// app.use("/api/v1", allRoutes);
app.post("/api/verify-token", async (req, res) => {
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
});

export default app;
