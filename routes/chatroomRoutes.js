const express = require('express');
const router = express.Router();
const Chatroom = require('../models/ChatRoom');

// Now, set up your routes:

// Create a chatroomss
router.post('/', async (req, res) => {
    const chatroom = new Chatroom({
        // Assuming you have a 'name' field in your chatroom model
        name: req.body.name
    });

    try {
        const savedChatroom = await chatroom.save();
        res.status(201).json(savedChatroom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Fetch all chatrooms
router.get('/', async (req, res) => {
    try {
        const chatrooms = await Chatroom.find();
        res.json(chatrooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Additional routes can be added for more functionalities

module.exports = router;
