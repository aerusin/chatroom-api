const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema({
    name: String,
    messages: [{
        sender: String,
        content: String,
        timestamp: Date
    }]
})

module.exports = mongoose.model('Chatroom', chatroomSchema);