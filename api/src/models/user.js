import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    state: {
        type: Number,
        default: 1
    }
});

const User = mongoose.model("user", userSchema);

export default User;