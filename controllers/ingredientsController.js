// Ingredient controller

const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const getIngredient = (req,res) => {
    res.send("Here are your ingredient")
}

module.exports = getIngredient