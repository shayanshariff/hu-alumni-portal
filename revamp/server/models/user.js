import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required:  true },
    email: {type: String, required: true},
    password: {type: String, required: true},
    batch: {type: String, required: true},
    major: {type: String, required: true},
    gradschool: {type: Boolean, required: true},
    employed: {type: Boolean, required: true},
    id: {type: String},

});

export default mongoose.model("User", userSchema);