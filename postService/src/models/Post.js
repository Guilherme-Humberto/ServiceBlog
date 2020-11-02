import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: String
})

export const Post = mongoose.model("Post", PostSchema)