const Sequelize = require('sequelize')
const db = require('./db')

const Message = db.define('messages', {
    text: {
        type: Sequelize.TEXT, 
        allowNull: false
    }, 
    date: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
    }, 
})

module.exports = Message