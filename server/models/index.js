const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/remesh-project", {
  logging: false
});

const Conversation = db.define('conversation', {
    title: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    startDate: {
        type: Sequelize.DATE, 
        defaultValue: Date.now()
    }
})

const Message = db.define('messages', {
    text: {
        type: Sequelize.TEXT, 
        allowNull: false
    }, 
    date: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
    }, 
    time: {
        type: Sequelize.TIME, 
        defaultValue: currentTime()
    }
})

module.exports = {
    db, 
    Conversation, 
    Message
}