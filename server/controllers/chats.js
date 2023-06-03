const mongoose = require('mongoose');
const chatService = require('../services/chats')
const tokenVerifer = require('../services/token')
const idGetter = require('../services/ids')
const userGetter = require('../models/users')
const Message = require('../models/messages');
const ChatCol = require('../models/chatCol');

const createChat = async (req, res) => {

    if(!req.headers.authorization){
       return res.status(401).send();
    }
    const token = req.headers.authorization.split(' ')[1]
    const validity =  await tokenVerifer.isValidTokenWithDetails(token)
    if(!validity){
        res.status(401).send();
    }

    const chatId = await idGetter.nextId("chats");
    const currentUser = validity.username
    const chatContact = await userGetter.findOne({username: req.body.username})
    if (chatContact == null) {
        res.status(401).send();
    } else {
        const chatUser = await userGetter.findOne({username: currentUser})
        const addChatToContact = await chatService.createChat(chatId, req.body.username ,currentUser, chatUser.displayName, chatUser.profilePic);
        const chatMsgCollection = mongoose.model('messages', Message.schema, 'messages');
        const msg = new chatMsgCollection({_id: chatId, messages: null})
        const temp = await msg.save();
        const chatsCollection = mongoose.model('chatcols', ChatCol.schema, 'chatcols');
        const newChatInChatCol = new chatsCollection({_id: chatId, userOne: currentUser, userTwo: req.body.username});
        const flag = await newChatInChatCol.save();
        res.json(await chatService.createChat(chatId, currentUser ,req.body.username, chatContact.displayName, chatContact.profilePic));
    }
}







const getChat = async (req, res) => {

    if(!req.headers.authorization){
       return res.status(401).send();
    }
    const token = req.headers.authorization.split(' ')[1]
    const validity =  await tokenVerifer.isValidTokenWithDetails(token)
    if(!validity){
        res.status(401).send();
    }

    const chatId = req.params.id
    res.json(await chatService.getChat(chatId));
}


const getChats = async(req,res) => {
    if(!req.headers.authorization){
        return res.status(401).send();
     }
    const token = req.headers.authorization.split(' ')[1]
    const validity =  await tokenVerifer.isValidTokenWithDetails(token)
    if (!validity) {
        return res.status(401).send();
    }
    const collection = await chatService.getChats(validity.username)
    if (!collection) {
        return res.status(401).send();
    }
    res.json(collection)
}

const removeChat = async(req,res) => {
    if(!req.headers.authorization){
        return res.status(401).send();
    }
    const token = req.headers.authorization.split(' ')[1]
    const validity =  await tokenVerifer.isValidTokenWithDetails(token)
    if (!validity) {
        return res.status(401).send();
    }

    const chatId = req.params.id
    const res = chatService.removeChat(chatId)

    if (!res) {
        return res.status(401).send();
    } else {
        return res.status(200).send();
    }
}

module.exports = {
    createChat,
    getChat,
    getChats,
    removeChat
};