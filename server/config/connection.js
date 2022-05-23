const mongoose = require('mongoose')

// Configure Mongoose and MongoDB
mongoose.connect('mongodb://localhost:27017/pet_match', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection