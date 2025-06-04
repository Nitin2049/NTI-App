import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import allRoutes from "./routes/app.routes.js"; // Importing routes

const app = express();

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
app.use("/api/v1", allRoutes);
// app.post("/api/verify-token", async (req, res) => {
//   const { token } = req.body;

//   try {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     const userid = payload["sub"];

//     console.log("User ID:", userid);
//     console.log("payload:", payload);

//     res.status(200).json({ success: true, user: payload });
//   } catch (error) {
//     res.status(401).json({ success: false, message: "Invalid token", error });
//   }
// });

// app.get("/api/user/profile", (req, res) => {
//   console.log("Fetching user profile...");
//   res.status(200).json({ message: "Welcome to the API!" });
// });

export default app;
