const mongoose = require('mongoose') 
const { Schema } = mongoose

const ExperienceSchema = new Schema({
    image: String,
    title: String,
    description: String,
    place: String,
    price: Number,
    score: Number,
    users: Number
})

const ExperienceModel = mongoose.model('experiences', ExperienceSchema)

module.exports = ExperienceModel
