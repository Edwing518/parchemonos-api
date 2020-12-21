const jwt = require('jsonwebtoken')
const UserModel = require('./../models/userModel')

const register = async (userData) => {
    try {
        const user = await UserModel(userData).save()
        return { status: 1, user }
    } catch (error) {
        throw error
    }
}

const auth = async (email, password) => {
    try {
        const user = await UserModel.findOne({ email: email, password: password })
        if (user) {
            const payload = {
                idUser: user.id,
                name: user.name
            }
            const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
            return { status: 1, token }
        }
        throw { status: 401, message: 'Not authorized' }
    } catch (error) {
        throw error
    }
}

module.exports = {
    register,
    auth
}