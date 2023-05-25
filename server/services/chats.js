const Chat = require('../models/chats');
const createChat= async (username) =>{
        const chat = new Chat ({username: username});
        return await chat.save();
}

module.exports = {createChat};