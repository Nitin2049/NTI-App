import mongoose from "mongoose";

const applyForCertificateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required"],
      unique: true,
    },
    center: {
      type: String,
      default: "Noida",
      enum: ["Noida", "Pune", "Rewa"],
    },
    course: {
      type: String,
      enum: [
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
    },
    facultyName: {
      type: String,
      required: [true, "Faculty name is required"],
    },
    ntiStudentId: {
      type: String,
      required: [true, "Student Id is required"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ApplyForCertificate = mongoose.model(
  "ApplyForCertificate",
  applyForCertificateSchema
);
