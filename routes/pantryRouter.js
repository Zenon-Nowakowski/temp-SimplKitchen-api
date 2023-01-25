// pantry routes
const express = require('express')
const router = express.Router()

const {
    getAllIngredients, 
    getIngredient, 
    createIngredient
} = require('../controllers/pantryController')

//router.get('/ingredients', getAllIngredients)
router.route('/ingredients').get(getAllIngredients)
router.route('/ingredients/:id').get(getIngredient)


module.exports = router