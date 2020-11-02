import { UserService } from '../service'

export default {
    async registerUser (req, res) {
        const { name, email, password } = req.body

        const user = await new Promise((resolve, reject) => {
            UserService.registerUser({ user: { name, email, password } }, (err, response) => {
                if(err) {
                    reject(err)
                }
                else {
                    resolve(response)
                }
            })
        })
        return res.json(user)
    },

    async getUserById (req, res) {
        const { id } = req.params

        const response = await new Promise((resolve, reject) => {
            UserService.getUserById({ id }, (err, response) => {
                if(err) {
                    reject(err)
                }
                else {
                    resolve(response)
                }
            })
        })
        return res.send(response)
    },

    async loginUser (req, res) {
        const { email, password } = req.body

        const response = await new Promise((resolve, reject) => {
            UserService.loginUser({ user: { email, password } }, (err, response) => {
                if(err) {
                    console.log(err)
                }
                else {
                    resolve(response)
                }
            })
        })
        return res.json(response)
    }
}