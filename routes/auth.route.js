const router = require('express').Router();
const User = require('../models/User');
const { registerValidation, lognValidation } = require('../routes/validation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv/config')

const TOKEN = process.env.TOKEN_SECRET

router.post('/register', async (req, res) => {

  //validate before make a user
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  //checking if the user exist
  const existEmail = await User.findOne({ email: req.body.email })
  if (existEmail) return res.status(400).send(`Email alredy exist!`)

  //hide password
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(req.body.password, salt);

  //new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash
  })

  try {
    const savedUser = await user.save();
    res.send(savedUser)
  } catch (error) {
    res.status(404).send(error.message)
  }
})

router.post('/login', async (req, res) => {
  //validate 
  const { error } = lognValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  //checking if the user exist
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send(`Email does not exist`)

  //checkoing password
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send(`Email or password is wrong!`)

  //create token
  const token = jwt.sign({_id: user._id}, TOKEN)
  res.header('auth-token', token).send(token)
})


module.exports = router;