require('dotenv').config()
const mongoose = require('mongoose')

// Configure Mongoose and MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pet_match', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})  

module.exports = mongoose.connection