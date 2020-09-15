const db = require('./db')
const Conversation = require('./Conversation')
const Message = require('./Message')
const Thought = require('./Thought')

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