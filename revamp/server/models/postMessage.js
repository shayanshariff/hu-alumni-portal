import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    user: String,
    forum: String,
    image: String,
    likes: {
        type: Number,
        defualt: 0
    },
    createdOn: {
        type: Date,
        defualt: new Date()
    },

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; 