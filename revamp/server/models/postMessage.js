import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    user: String,
    forum: String,
    image: String,
    likes: {
        type: [String],
        default: [],
    },
    createdOn: {
        type: Date,
        default: new Date()
    },

});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; 