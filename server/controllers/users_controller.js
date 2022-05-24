const User = require('../models/User')

module.exports = {
  show: async (req, res) => {
    const user = await User.findById(req.params.user)

    res.status(200).json({
      data: user
    })
  },
  store: async (req, res) => {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })

    return res.status(201).json({
      data: user
    })
  },
  update: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.user,
      {
        $addToSet: {
          pets: req.params.pet
        }
      }, {
        new: true
      }
    )

    return res.status(200).json({ data: user })
  }
}