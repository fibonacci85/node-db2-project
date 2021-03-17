// DO YOUR MAGIC
const express = require('express')

const Cars = require('./cars-model')
const mw = require('../cars/cars-middleware')

const router = express.Router();


router.get('/', mw.checkCarId, (req, res) => {
    Cars.find(req.body)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(error => {
        res.status(500).json({
            message:"Error retrieving car"
        })
    })
})

module.exports = router