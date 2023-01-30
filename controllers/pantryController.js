const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
const Pantry = require('../models/Pantry')

const getAllIngredients = async (req,res) => {
    res.send("getAllIngredients")
    const queryObject = {
        // Use authenticaiton to change to req.user.userID
        ownedBy: '63cf029cb85efb1f1822521d'
        //getdata ownedBy.ingredients[];
        //for loop, i = ingredients.count()
      }
    let result = Pantry.find(queryObject)
    let pantry = await result
    
    console.log(pantry);
    res.status(StatusCodes.OK).json({pantry})
}
const getIngredient = async (req, res) => {
  res.send('getIngredient')
  const queryObject = {
    // Use authenticaiton to change to req.user.userID
    ownedBy: '63cf029cb85efb1f1822521d'
  }
  //search array from users ingredients
}
const createIngredient = async (req, res) => {
  res.send('createIngredient')
}
// module.exports = getAllIngredients
module.exports = {
    getAllIngredients, 
    getIngredient,
    createIngredient
}