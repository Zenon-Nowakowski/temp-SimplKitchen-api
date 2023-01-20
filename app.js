require('dotenv').config()
require('express-async-errors');


// Swagger 
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

const express = require('express')
app = express()
const connectDB = require('./db/connect')

app.use(express.json());
// routers
const authRouter = require('./routes/auth')

// routes
app.use('/api/v1/auth', authRouter)

//error handling middleware
const errorHandlerMiddleware = require('./middleware/error-handler');
app.use(errorHandlerMiddleware);

// Database
app.get('/', (req, res) => {
    res.send('<h1>SimplKitchenAPI</h1><a href="/api-docs">Documentation</a>')
})
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()