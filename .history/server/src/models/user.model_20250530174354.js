import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
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
        Enum: ['BCA','Web Test', 'BBA', 'BSc', 'MCA', 'MBA'],
        default: "Web Test",
    },
}, {
    timestamps: true,
});

export const User = mongoose.model('User', userSchema);