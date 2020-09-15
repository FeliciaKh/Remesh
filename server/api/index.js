const router = require('express').Router()

router.use('/conversation', require('./conversation'))

module.exports = router