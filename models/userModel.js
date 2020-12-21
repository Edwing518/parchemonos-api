const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  phone: String,
  document: String,
  email: { type: String, unique: true, required: true },
  password: String,
})

const User = mongoose.model('users', UserSchema)

module.exports = User