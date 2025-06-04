import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    studentId: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    courses: {
      type: String,
      Enum: [
        "Digital Marketing",
        "Business Analyst",
        "HR",
        "Software Testing",
        "Automation Testing",
        "Web Development",
        "Graphic Design",
        "Data Science",
        "Video Editing",
        "Cloud Computing",
        "SQL",
        "Java",
        "Python",
        "C",
        "C++",
      ],
      default: "No Course Selected",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
