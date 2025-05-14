import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    u_id: {type: String, required: true, default: "abc1234"},
    firstName: {type: String, required: true},
    lastName: String,
    email: {type: String, required: true},
    password: {type: String, required: true}
})

export const user = mongoose.model('user', userSchema);