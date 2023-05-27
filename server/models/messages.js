const mongoose = require('mongoose');

const allMessagesSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: false
    },
    messages: {
        _id: {
            type: Number,
            required: false
        },
        created: {
            type: Date,
            required:false,
            default: Date()
        },
        sender: {
            username: {
                type: String,
                required: false
            }
        },
        content: {
            type: String,
            required:false
        }
    }
})


const Message = mongoose.model('Message', allMessagesSchema);

module.exports = Message;