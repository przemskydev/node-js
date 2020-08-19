require('./mongodb/mongoose')
//model 
const User = require('./mongodb/models/user')

// const user = new User({
//   name: 'Pep',
//   age: 31
// })

// user.save().then(()=>{
//   console.log(user)
// }).catch(error=>console.log(error))

const createUser = async (data) => {
  try {
    const user = new User(data)

    await user.save()
    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

const findUsers = async () => {
  try {
    const users = await User.find({})
    console.log(users)
  } catch (error) {
    console.log(error)
  }
}

createUser({ name: 'Gandalf', age: 150 })
// findUsers()