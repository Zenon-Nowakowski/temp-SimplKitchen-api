require('dotenv').config()
const ingredientsData = require('./ingredients.json')
const connectDB = require('../db/connect')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Job.create(ingredientsData);
        console.log('Success !!!');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();