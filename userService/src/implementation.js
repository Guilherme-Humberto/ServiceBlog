import { User } from './models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import auth from './config/auth.json'

function generateToken(params = {}) {
    return jwt.sign(params, auth.secret, {
        expiresIn: 86400
    })
}

export default {
    async registerUser(call, callback) {
        try {
            const { name, email, password } = call.request.user

            if (await User.findOne({ email })) {
                return callback({ error: "Usuário já existe" })
            }

            const user = await User.create({ name, email, password })

            return callback(null, { user: { ...user.toObject(), id: user._id } })
        }
        catch (err) {
            return callback({ err })
        }
    },

    async getUserById(call, callback) {
        const { id } = call.request

        const user = await User.findById(id)

        if (!user) {
            return callback({ error: "Usuário não existe" })
        }

        return callback(null, {
            user: { ...user.toObject(), id: user._id }
        })
    },

    async loginUser(call, callback) {
        const { email, password } = call.request.user

        const user = await User.findOne({ email })

        if (!user) {
            return callback({ error: "Usuário não encontrado" })
        }

        if (!await bcrypt.compare(password, user.password)) {
            return callback({ error: "Senha inválida" })
        }

        return callback(null, {
            user: { ...user.toObject(), id: user._id },
            token: generateToken({ id: user.id })
        })
    }
}