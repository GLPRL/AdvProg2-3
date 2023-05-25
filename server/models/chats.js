const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    profilePic: {
        type: Image,
        required: false
    }
})

const lastMsgSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        required:true
    },
    content: {
        type: String,
        required:true
    }
})

const chatSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    user: {
        type: contactSchema,
        required: true
    },
    lastMessage: {
        type:lastMsgSchema,
        required: false
    },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;

