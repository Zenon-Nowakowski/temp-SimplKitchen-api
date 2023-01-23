const mongoose = require('mongoose')
// const Ingredient = require('./Ingredient')

const PantrySchema = new mongoose.Schema({
    ownedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    },
    ingredients: {
        type: Array,
        default: undefined
    }
})

module.exports = mongoose.model('Pantry', PantrySchema)