const mongoose = require('mongoose')

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide ingredient name'],
    },
    picture_content_type: {
        type: String,
        required: [true, 'please provide ingredient path'],
    },
    food_group: {
        type: String,
        required: [true, 'please provide ingredient food group'],
    },
    food_subgroup: {
        type: String,
        required: [true, 'please provide ingredient subgroup'],
    }
}, { strict: false })

module.exports = mongoose.model('Ingredient', IngredientSchema)