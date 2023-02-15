import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    user: String,
    forum: String,
    image: String,
    likes: {
        type: Number,
        default: 0
    },
    createdOn: {
        type: Date,
        default: new Date()
    },

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; 