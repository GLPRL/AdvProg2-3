const mongoose = require('mongoose');
const Message = require('../models/messages');

const createChat= async (chatId, currentUser, messageContent, messageId) =>{

    const messagesCollection = mongoose.model('messages', Message.schema, 'messages');
    const userMessages = await messagesCollection.findById(chatId);
    const messageDetails = {_id: messageId, sender: currentUser, content: messageContent}
    userMessages.messages.push(messageDetails);
    console.log(messageDetails)
    console.log(userMessages)
    return await userMessages.save();
}