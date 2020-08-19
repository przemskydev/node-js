const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18 
  }
})

userSchema.pre('save', function(next){
  this.name += ' is cool person!'

  next()
})

const User = model('User', userSchema)

module.exports = User;