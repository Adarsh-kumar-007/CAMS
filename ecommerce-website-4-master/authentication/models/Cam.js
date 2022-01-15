const { Timestamp } = require('bson')
const mongoose      =require('mongoose')
const { stringify } = require('querystring')
const Schema        =mongoose.Schema

const camSchema     = new Schema({
    name: {
        type: string
    },
    Branch: {
        type: string
    },
    email: {
        type: string
    },
    phone: {
        type: string

    },
    USN: {
        type: string
    }
}, {Timestamps: true})

const Cam = mongoose.model('Cam', CamSchema)
module.exports = Cam