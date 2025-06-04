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

const User = mongoose.model('User', userSchema);
export default User;