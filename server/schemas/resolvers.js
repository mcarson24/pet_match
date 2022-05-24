const Pet = require("../models/Pet")
const User = require("../models/User")

const resolvers = {
  Query: {
    user: async (parent, { _id }) => await User.findById(_id).populate('pets'),
    users: async () => await User.find({}).populate('pets'),
    pets: async (parent, { _id }) => {
      const params = _id ? { _id } : {}
      return await Pet.find(params)
    }
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => await User.create({ name, email, password }),
    addPet: async (parent, args, context) => {
      return await Pet.create({
        name: args.name,
        type: args.type,
        breed: args.breed,
        location: args.location,
        description: args.description,
        image: args.image,
        link: args.link
      })
    },
    addPetToUser: async (parent, { user, pet }) => {
      return await User.findOneAndUpdate(
        { _id: user },
        { $addToSet: { pets: pet } }, 
        { new: true }
      )
    }
  }
};




module.exports = resolvers;