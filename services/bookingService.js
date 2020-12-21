const BookingModel = require('./../models/bookingModel')
const ExperienceModel = require('./../models/experienceModel')

const makeBooking = async (reservation) => {
    try {
        const Booking = await BookingModel(reservation).save()
        return {status: 1, Booking}
    } catch (error) {
        throw error
    }
}

const makeRate = async (idReservation, rate) => {
    try {
        const Booking = await BookingModel.findById(idReservation)
        //if(!Booking){
            const experience = await ExperienceModel.findById(Booking.experience_id)
            const users = Number(experience.users+1)
            const score = Number(((experience.score * experience.users) + rate.score )/ users)
            const Rate = await BookingModel.updateOne({_id: idReservation}, {'rate': rate})
            const experienceRate = await ExperienceModel.updateOne({_id: Booking.experience_id},{'score': score, 'users': users})
            return { status: 1, Rate, experienceRate}
        //}else{

        //}
    } catch (error) {
        throw error
    }
}

module.exports = {
    makeRate,
    makeBooking
}