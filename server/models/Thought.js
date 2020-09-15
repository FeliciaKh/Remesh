const Sequelize = require('sequelize')
const db = require('./db')

const Thought = db.define('thoughts', {
    text: {
        type: Sequelize.TEXT, 
        allowNull: false
    }, 
    date: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
    }
})

module.exports = Thought