const mongoose = require('mongoose');
const Chat = require('../models/chats');
const User = require('../models/users');
const Messages = require('../models/messages');


const createChat= async (chatId, currentUser, contactUser, contactDisplayName, contactProfilePic) =>{
        const userChatCollection = mongoose.model(currentUser, Chat.schema, currentUser);
        
        const contactDetails = {username: contactUser, displayName: contactDisplayName, profilePic: contactProfilePic}
        //console.log(contactDetails)
        const chat = new userChatCollection({_id: chatId,user: contactDetails},);
        return await chat.save();
}

const getChat = async (chatId, firstUsername) => {

        const user1 = firstUsername;
        //console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        //console.log(user1)
        const userOneChatCollection = mongoose.model(user1, Chat.schema, user1);
        const chatDocInUser = await userOneChatCollection.findOne({_id:chatId})
        const user2 = chatDocInUser.user.username;
        // const userTwoChatCollection = mongoose.model(user2, Chat.schema, user2);

        const userOneDetails = await User.findOne({username: user1})
        const userTwoDetails = await User.findOne({username: user2})

        const messagesModel = mongoose.model('messages', Messages.schema, 'messages');
        const msgsOfChat = await messagesModel.findOne({_id: chatId});
        const msgsArray = msgsOfChat.messages
        const newMsgsArray = []

        for (let i = 0; i < msgsArray.length(); i++) {
                let tempDisplayName = null;
                let tempProfilePic = null;
                if (msgsArray[i].sender.username == user1) {
                        tempDisplayName = userOneDetails.displayName;
                        tempProfilePic = userOneDetails.profilePic;
                } else {
                        tempDisplayName = userTwoDetails.displayName;
                        tempProfilePic = userTwoDetails.profilePic;
                }
                
                newMsgsArray[i] = {
                        id: msgsArray[i]._id, 
                        created: msgsArray[i].created,
                        sender: {
                                username: msgsArray[i].sender.username,
                                displayName: tempDisplayName,
                                profilePic: tempProfilePic        
                        },
                        content: msgsArray[i].content
                }
        }

        const resVal = {
                id : chatId,
                user : [
                        {
                                username: user1,
                                displayName: userOneDetails.displayName,
                                profilePic: userOneDetails.profilePic
                        }, {
                                username: user2,
                                displayName: userTwoDetails.displayName,
                                profilePic: userTwoDetails.profilePic
                        }
                ],
                messages : newMsgsArray 
        }

        return resVal

}

const getChats = async (username) => {
        const userChatCollection = mongoose.model(username, Chat.schema, username);
        const temp = await userChatCollection.collection.find().toArray();
        // console.log(temp)
        return (temp)
}


module.exports = {
        createChat,
        getChat,
        getChats
        };