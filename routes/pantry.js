// pantry routes
const express = require('express')
const router = express.Router()

const {
    getAllIngredients, 
    getIngredient, 
    createIngredient
} = require('../controllers/pantry')

router.get('/ingredients', getAllIngredients)

module.exports = router