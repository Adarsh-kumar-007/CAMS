const express       = require('express')
const router        =express.Router()

const CamController    =require('../controllers/CamController')

router.get('/',CamController.index)
router.post('/show',CamController.show)
router.post('/store',CamController.store)
router.post('/update', CamController.update)
router.post('/delete', CamController.destroy)

module.exports = router