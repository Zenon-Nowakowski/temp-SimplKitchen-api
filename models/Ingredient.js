const mongoose = require('mongoose')

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide ingredient name'],
    },
    foodGroup: String
})

module.exports = mongoose.model('Ingredient', IngredientSchema)