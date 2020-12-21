const { makeBooking, makeRate } = require('./../services/bookingService')

const create = async (req, res) => {
    const user = req.payload
    const reservation = {
        'booking_date': new Date(req.body.bookingDate),
        'experience_id': req.params.id,
        'user_id': user.idUser,
        'comments': req.body.comments
    }
    const response = await makeBooking(reservation)
    res.json(response)
}

const rate = async (req, res) => {
    const rate = {
        score: req.body.score,
        comments: req.body.comments
    }
    const response = await makeRate(req.params.id, rate)
    res.json(response)
}

module.exports = {
    create,
    rate
}