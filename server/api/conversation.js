const router = require('express').Router()
const Conversation = require('../models/Conversation')

router.get('/', async (req, res, next) => {
    try {
        const conversations = await Conversation.findAll()
        res.json(conversations)
    } catch (error) {
        next(error)
    }
})

module.exports = router