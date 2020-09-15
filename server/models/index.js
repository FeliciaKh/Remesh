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

module.exports = {
    db, 
    Conversation
}