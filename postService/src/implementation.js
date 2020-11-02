import { Post } from './models/Post'

export default {
    async createPost (call, callback) {
        const { title, content, user } = call.request.post

        const post = await Post.create({
            title,
            content,
            user
        })

        console.log(post.user)

        return callback(null, { post: { ...post.toObject(), id: post._id } })
    },

    async getPostById (call, callback) {
        const { id } = call.request

        const post = await Post.findById(id)

        return callback(null, { post: { ...post.toObject(), id: post._id } })
    }
}