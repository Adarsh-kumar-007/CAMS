const { response } = require('express')
const req = require('express/lib/request')
const Cam = require('../models/cam')
const Employee = require('../models/cam')

//show the list of  cams
const index = (req, res, next) => {
    Cam.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'

        })
    })
}
    //show single cams
const show = (req,res,next) => {
    let CamId = req.body.CamId
    Cam.findById(Cam)
    .then(response => {
        res,json({
            response
        })
    })
    .catch(error => {
        res.json({
            messsage: 'An error Occured'
        })
    })
}

const store = (req, res , next) => {
    let Cam = new Cam({
        name: req.body.name,
        Branch: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        USN: req.body.USN
    })
    Cam.save()
    .then(response => {
        res.jon({
            message: 'Employee Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })

}
// update an cam
const update = (req, res , next) => {
    let CamId = req.body.CamId
    let updateData = {
        name: req.body.name,
        Branch: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        USN: req.body.USN

    }
    Cam.findByIdAndUpdate(CamId, {$set: updateData})
    .then(() => {
        res.json({
            message: 'cam updated sucessfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

//deleate an cam
const destroy = (req, res, next) => {
    let CamId = res.body.CamId
    Cam.findByIdAndRemove(CamId)
    .then(() => {
        req.json({
            message: 'CAM DELEATED SUCCESSFULLY'
        })
    })
    .catch(error =>{
        req.json({
            message: 'an error occured'

        })
    })
}
module.export = {
    index,show,store,update,destroy
}