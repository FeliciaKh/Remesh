const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/remesh-project", {
  logging: false
});

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

Conversation.hasMany(Message)
Message.belongsTo(Conversation)
Message.hasMany(Thought)
Thought.belongsTo(Message)

module.exports = {
    db, 
    Conversation, 
    Message, 
    Thought
}