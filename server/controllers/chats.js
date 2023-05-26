const chatService = require('../services/chats')
const tokenVerifer = require('../services/token')
const idGetter = require('../models/ids')
const userGetter = require('../models/users')

const createChat = async (req, res) => {

    if(!req.headers.authorization){
        console.log("im in the reqheaders")
       return res.status(401).send();
    }
    console.log("im near token");
    const token = req.headers.authorization.split(' ')[1]
    const validity =  await tokenVerifer.isValidTokenWithDetails(token)
    if(!validity){
        console.log("the token is invalid!");
        res.status(401).send();
    }

    //console.log("token IS VALID")
    //console.log("current user is -- > " + validity.username)
    const chatId = await idGetter.nextId("chats");
    console.log(chatId);
    const chatContact = await userGetter.findOne({username: req.body.username})
    const currentUser = validity.username
    res.json(await chatService.createChat(chatId, currentUser ,req.body.username, chatContact.displayName, chatContact.profilePic));
}







const getChat = async (req, res) => {
    console.log("in getChat")
    res.json(await chatService.getChat(req.body));
}

module.exports = {
    createChat,
    getChat
};