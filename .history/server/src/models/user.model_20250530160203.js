import mongoose from 'mongoose';
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    studentId: {
        type: String,
        required: true,
        unique: true,
    },
    courses: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);
export default User;