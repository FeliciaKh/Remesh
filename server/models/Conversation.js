const Sequelize = require('sequelize')
const db = require('./db')

const Conversation = db.define('conversations', {
    title: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    startDate: {
        type: Sequelize.DATEONLY, 
        defaultValue: Date.now()
    }
})

module.exports = Conversation