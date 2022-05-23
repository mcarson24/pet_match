const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = Schema({
  name: { // username
    type: Schema.Types.String, 
    required: true,
    trim: true
  },
  email: {
    type: Schema.Types.String,
    required: true,
    trim: true
  },
  password: {
    type: Schema.Types.String,
    required: true,
    minlength: 8
  },
  pets: [Pet] // This will be the pets that a user 'loves' or saves for later reference
})

UserSchema.pre('save', async next => {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

// For Authentication, check if provided password matches user's hashed password:
UserSchema.methods.isPasswordCorrect = async password => {
  return await bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', UserSchema)

module.exports = User