const express = require("express");
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

// auto import routes
const { readdirSync } = require('fs');

// connect db
const connectDB = require('./config/db')
connectDB()

// app use
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({ limit: '10mb' }))

// auto-imported routes
readdirSync('./routes').map((route) => app.use('/api', require(`./routes/${route}`)))

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))