// Controller

const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')


const register = async (req, res) => {

    const user = await User.create({ ...req.body })
    const token = user.createJWT()

    res
        .status(StatusCodes.CREATED)
        .json({ user: { name: user.name }, token })

}

const login = async (req, res) => {
    //console.log('Login user');

    // Check to make sure structure of the request is correct. Requires an email and a password.
    //res.send('login')
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('Please provide email and pasword')
    }

    // Attempt to find the User
    const user = await User.findOne({ email })
    // If there is no user with this email...
    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials')
    }

    // Check to see if the provided password is correct
    const isPasswordCorrect = await user.comparePassword(password)
    // If not throw an error
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token })

}

module.exports = {
    register,
    login
}