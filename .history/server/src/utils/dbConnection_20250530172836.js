import mongoose from "mongoose";
// import {datainitialise} from "./dbinitialise.js";

const connectDb = async () => {
  const DB_NAME = "mealManagement";

  try {
    const connectionString = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("mongodb connected");
    // datainitialise();
  } catch (error) {
    console.log("ERROR:", error);
    process.exit(1);
  }
};
export default connectDb;
