const connection = require('../config/connection')
const { names, breeds } = require('./data')
const Pet = require('../models/Pet')
const User = require('../models/User')

connection.once('open', async () => {
  console.log('Seeding database...');

  // Clear out existing documents
  await Pet.deleteMany({})
  await User.deleteMany({})

  const pets = []
  
  const makePet = () => {
    pets.push({
      name: names[Math.floor(Math.random() * names.length)],
      type: 'Dog',
      breed: breeds[Math.floor(Math.random() * breeds.length)],
      location: 'Philadelphia, PA',
      description: 'A very good dog.',
      image: 'http://placecorgi.com/480',
      link: 'https://www.petfinder.com/dog/kiara-55681541/ca/los-angeles/bark-n-bitches-jimis-angels-ca1522/'
    })
  }
  
  // Create ten pets
  for (let i = 0; i < 10; i++) {
    makePet()
  }
  
  await User.create({
    name: 'BobbyRobby',
    email: 'bob.robertson@example.com',
    password: 'sosecure'
  })
  
  const { insertedIds } = await Pet.collection.insertMany(pets)

  // Add some 'loved' pets to the user:
  await User.findOneAndUpdate(
    { name: 'BobbyRobby' },
    { $addToSet: { 
      pets: [
        insertedIds['1'], 
        insertedIds['2'], 
        insertedIds['4']
      ] 
    }}
  )
  
  console.table(pets)

  process.exit(0)
})