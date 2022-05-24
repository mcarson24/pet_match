const Pet = require('../models/Pet')

module.exports = {
  store: async (req, res) => {
    const pet = await Pet.create({
      name: req.body.name,
      type: req.body.type,
      breed: req.body.breed,
      location: req.body.location,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link
    }) 
    
    return res.status(201).json({
      data: pet
    })
  }
}