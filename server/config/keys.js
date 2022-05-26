require('dotenv').config()

module.exports = {
  "petfinder": {
    "key": process.env.PETFINDER_KEY,
    "secret": process.env.PETFINDER_SECRET
  }
}