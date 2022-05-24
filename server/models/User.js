const { Schema, model } = require('mongoose')
// const Schema = mongoose.Schema
const Pet = require('./Pet')
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
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
  pets: [ // This will be the pets that a user 'loves' or saves for later reference
    {
      type: Schema.Types.ObjectId,
      ref: 'Pet'
    }
  ] 
}, {
  toJSON: {
    transform: (_, ret) => {
      delete ret.password
    }
  }
})

UserSchema.pre('save', async function(next) {
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

const User = model('User', UserSchema)

module.exports = User