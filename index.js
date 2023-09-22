const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json())
app.use(cors());

const chatroomRoutes = require('./routes/chatroomRoutes');


mongoose.connect('mongodb+srv://new_user:new_user@test.pu3uyja.mongodb.net/');
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"))



app.use('/chatrooms', chatroomRoutes);

app.get('/', (req, res) => {
    res.send('Chatroom API is running')
})
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
})