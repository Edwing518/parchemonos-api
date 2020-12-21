const { getAll, findById, getRanking, insert } = require('./../services/experienceService')

const all = async (req, res) => {
    try {
        const response = await getAll()
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const detail = async (req, res) => { //experience/detail/6
    try {
        const id = req.params.id
        const response = await findById(id)
        res.json(response)
    } catch (error) {
        res.status(error.status).send(error.message)
    }    
}

const ranking = async (req, res) => {
    try {
        const response = await getRanking()
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const create = async (req, res) => {
    try {
        const experienceData = req.body
        const response = await insert(experienceData)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    all,
    detail,
    ranking,
    create
}


