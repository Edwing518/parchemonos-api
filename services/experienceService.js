const ExperienceModel = require('./../models/experienceModel')

const getAll = async () => {
    try {
        const experiences = await ExperienceModel.find()
        return { status: 1, 'list': experiences }
    } catch (error) {
        throw error
    }
}

const findById = async (id) => {
    try {
        const experience = await ExperienceModel.findById(id)
        if (!experience) throw { status: 404, message: 'experience not found' }
        return { status: 1, experience }
    } catch (error) {
        throw { status: 500, message: error }
    }
}

const getRanking = async () => {
    try {
        const ranking = await ExperienceModel.find().sort({ score: 'desc' }).limit(5)
        return { status: 1, ranking }
    } catch (error) {
        throw error
    }
}

const insert = async (experienceData) => {
    try {
        const experience = await ExperienceModel(experienceData).save()
        return { status: 1, experience }
    } catch (error) {
        throw(error)
    }
}


module.exports = {
    getAll,
    findById,
    getRanking,
    insert
}