const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
    booking_date: Date,
    experience_id: String,
    user_id: String,
    comments: String,
    rate: {
        score: Number,
        comments: String
    }
})

const BookingModel = mongoose.model('bookings', BookingSchema)

module.exports = BookingModel