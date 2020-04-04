// Import modules
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Import routes
const authRoute = require('./routes/auth')
const protectedRoute = require('./routes/protected')

// Misc variables
const PORT = process.env.PORT || 3001

// dotenv configuration
dotenv.config()

// Connect to database
mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('Connected to database')
)

// Middlewares
app.use(express.json())
// Route middlewares
app.use('/api/user', authRoute)
app.use('/api/protected', protectedRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
