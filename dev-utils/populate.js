const ingredients = require('./ingredient-list')
const connectDB = require('../db/connect')

const test = connectDB(process.env.MONGO_URI)
console.log(test);

function populate(ingredients) {

}