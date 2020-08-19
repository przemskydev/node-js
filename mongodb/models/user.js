const { model } = require('mongoose')

const User = model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

module.exports = User;