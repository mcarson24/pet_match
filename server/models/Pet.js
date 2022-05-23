const mongoose = require('mongoose')
const Schema = mongoose.Schema

// When a user decides to match with a pet from the API
// We will save pertinent pet info so the API will not have
// to be re-called to get the pet's info at a later date.

// Pet info to save:
// Name
// Animal Type (cat, dog)
// Breed
// main image link
// location
// description
// petfinder link (all other information can be found on each pet's petfinder page)

const PetSchema = Schema({
  name: {
    type: Schema.Types.String,
    require: true,
  },
  type: {
    type: Schema.Types.String,
    require: true
  },
  breed: {
    type: Schema.Types.String,
    require: true
  },
  location: {
    type: Schema.Types.String
  },
  description: {
    type: Schema.Types.String
  },
  image: {
    type: Schema.Types.String,
    required: true
  },
  link: {
    type: Schema.Types.String,
    required: true
  }
})


