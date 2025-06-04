// import { Donate } from "../models/donate.model.js";
// import { Expense } from "../models/expense.model.js";
// import { User } from "../models/user.model.js";

// export const donateCtrl = async (req, res) => {
//   await Donate.create(req.body)
//     .then((data) => {
//       res.json(data);
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error creating donation:", error);
//     });
// };


// export const reportsCtrl = async (req, res) => {
//   try {
//     let expenseData = await Donate.find();
//     res.json(expenseData);
//     console.log(expenseData);
//   } catch {
//     (error) => {
//       console.error("Error creating expense:", error);
//     };
//   }
// };

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
}

export const userProfileCtrl = async (req, res) => {
  try {
  console.log("Fetching user profile...");
  res.status(200).json({ message: "Welcome to the API!" });
  }
  catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

// export const userHome = async (req, res) => {
//   try {
//     const adData = await User.findOne({ username: req.params.username });

//     if (!adData) {
//       console.log("User not found");
//     }
//     console.log("adData", adData);
//     res.json(adData);
//     console.log("Found User:", adData);
//   } catch (err) {
//     console.error("Error finding admin:", err);
//   }
// };
