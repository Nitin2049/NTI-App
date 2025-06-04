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

// export const expenseCtrl = async (req, res) => {
//   await Expense.create(req.body)
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error creating expense:", error);
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

// export const registerCtrl = async (req, res) => {
//   try {
//     let registerData = await User.create(req.body);
//     res.json(registerData);
//     console.log(registerData);
//   } catch {
//     (error) => {
//       console.error("Error registering User:", error);
//     };
//   }
// };

// export const loginCtrl = async (req, res) => {
//   const { username, password } = req.body;

//   User.findOne({ username: username })
//     .then((user) => {
//       if (user) {
//         if (user.password === password) {
//           console.log("Login successful");
//           res.json(user);
//         } else {
//           res.json("Incorrect password");
//         }
//       } else {
//         res.json("User is not found");
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.json("Server error");
//     });
// };

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
