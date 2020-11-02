import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.pre("save", async function(next) {
    if(!this.isModified("password")) next()

    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})

export const User = model("User", UserSchema)