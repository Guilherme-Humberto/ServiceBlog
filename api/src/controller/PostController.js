import { PostService } from '../service'

export default {
    async createPost (req, res) {
        const { title, content } = req.body
        const { id } = req.params

        const post = await new Promise((resolve, reject) => {
            PostService.createPost({ post: { title, content, user: id } }, (err, response) => {
                if(err) {
                    reject(err)
                }
                else {
                    resolve(response)
                }
            })
        })
        return res.json(post)
    },

    async getPostById (req, res) {
        const { id } = req.params

        const post = await new Promise((resolve, reject) => {
            PostService.getPostById({ id }, (err, response) => {
                if(err) {
                    reject(err)
                }
                else {
                    resolve(response)
                }
            })
        })
        return res.json(post)
    }
}