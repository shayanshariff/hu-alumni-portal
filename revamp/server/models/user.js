import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required:  true },
    email: {type: String, required: true},
    password: {type: String, required: true},
    batch: {type: String, required: true},
    major: {type: String, required: true},
    location: {type: String},
    gradschool: {type: Boolean},
    employed: {type: Boolean},
    huID: {type: String},
    id: {type: String},

});

export default mongoose.model("User", userSchema);
