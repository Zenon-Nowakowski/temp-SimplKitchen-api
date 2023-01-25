const mongoose = require('mongoose')

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide ingredient name'],
    },
    picture_content_type: {
        type: String,
        required: [true, 'please provide ingredient name'],
    },
    food_group: {
        type: String,
        required: [true, 'please provide ingredient name'],
    },
    food_subgroup: {
        type: String,
        required: [true, 'please provide ingredient name'],
    }
}, { strict: false })

module.exports = mongoose.model('Ingredient', IngredientSchema)