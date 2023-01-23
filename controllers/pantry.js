const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const getAllIngredients = (req,res) => {
    res.send("Here are your ingredients")
}

module.exports = getAllIngredients