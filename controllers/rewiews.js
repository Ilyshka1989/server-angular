const Rewiew = require('../models/models')

module.exports.getAll = async function (req, res){
    const rewiew = new Rewiew({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        rating: req.body.rating,
        message: req.body.message,
        dateCreated: req.body.dateCreated,
    })
    await rewiew.save()
    res.status(201).json(rewiew)
}

module.exports.create = async function (req, res){
    const rewiew = new Rewiew({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        rating: req.body.rating,
        message: req.body.message,
        dateCreated: req.body.dateCreated,
    })
    await rewiew.save()
    res.status(201).json(rewiew)
}
