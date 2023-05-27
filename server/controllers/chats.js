const mongoose = require('mongoose');
const chatService = require('../services/chats')
const tokenVerifer = require('../services/token')
const idGetter = require('../models/ids')
const userGetter = require('../models/users')
const Message = require('../models/messages');

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
    const currentUser = validity.username
    const chatContact = await userGetter.findOne({username: req.body.username})
    if (chatContact == null) {
        console.log("user doesnt exist!");
        res.status(401).send();
    } else {
        const chatUser = await userGetter.findOne({username: currentUser})
        const addChatToContact = await chatService.createChat(chatId, req.body.username ,currentUser, chatUser.displayName, chatUser.profilePic);
        const chatMsgCollection = mongoose.model('messages', Message.schema, 'messages');
        const msg = new chatMsgCollection({_id: chatId, messages: []})
        const temp = await msg.save();
        res.json(await chatService.createChat(chatId, currentUser ,req.body.username, chatContact.displayName, chatContact.profilePic));
    }
}







const getChat = async (req, res) => {
    console.log("in getChat")
    res.json(await chatService.getChat(req.body));
}


const getChats = async(req,res) => {
    console.log("in getchatSSS")
    const token = req.headers.authorization.split(' ')[1]
    const validity =  await tokenVerifer.isValidTokenWithDetails(token)
    const collection = await chatService.getChats(validity.username)
    console.log(collection)
    res.json(collection)
}

module.exports = {
    createChat,
    getChat,
    getChats
};