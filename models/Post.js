const { Schema, model } = require('mongoose');

const PostSchema = Schema({
  title: {
    type: String,
    require: true
  },
  desc: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now,
    require: true
  }
})

module.exports = model('Posts', PostSchema)