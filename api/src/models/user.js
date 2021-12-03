import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: Number,
        default: 1
    },
    rol: {
        type: String,
    },
    created_at: {
        type: Date,
    }
});

const User = mongoose.model("user", userSchema);

export default User;
