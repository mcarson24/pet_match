require('dotenv').config()
const mongoose = require('mongoose')

// Configure Mongoose and MongoDB
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })  
} else {
  mongoose.connect('mongodb://localhost:27017/pet_match', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = mongoose.connection