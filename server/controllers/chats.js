const chatService = require('../services/chats')

const createChat = async (req, res) => {
    console.log("in createChat")
    res.json(await chatService.createChat(req.body));
}

module.exports = {
    createChat
};