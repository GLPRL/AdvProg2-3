const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    displayName: {
        type: String,
        required: false
    },
    profilePic: {
        type: String,
        required: false
    }
})

const lastMsgSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: false
    },
    created: {
        type: Date,
        required:false
    },
    content: {
        type: String,
        required:false
    }
})

const chatSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: false
    },
    user: {
        type: contactSchema,
        required: false
    },
    lastMessage: {
        type:lastMsgSchema,
        default: null,
        required: false
    },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;

