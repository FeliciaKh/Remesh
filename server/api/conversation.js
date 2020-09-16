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

router.get('/:id', async (req, res, next) => {
    try {
        const conversation = await Conversation.findById(req.params.id)
        res.json(conversation)
    } catch (error) {
        next(error)
    }
})

router.post('/', async(req, res, next) => {
    try {
        const conversation = await Conversation.create(req.body)
        res.json(conversation)
    } catch (error) {
        next(error)
    }
})

module.exports = router