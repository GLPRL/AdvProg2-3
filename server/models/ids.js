const mongoose = require('mongoose');

const idSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    currentId: {
        type: Number,
        default: 0,
        required: false,
    }
});

const ids = mongoose.model('ids', idSchema, 'idCollection');


async function checkIdCollection() {
    const isIdCollectionExists = await ids.exists();
    
    if (isIdCollectionExists) {
        console.log("IdColl exists!")
    } else {
        console.log("IdColl doesnt exist")
        chatIdCreate();
        messageIdCreate();
        
    }
}

async function chatIdCreate() {
    const id = new ids({
        name: 'chats', currentId: 0
    })
    return await id.save();
}

async function messageIdCreate() {
    const id = new ids({
        name: 'messages', currentId: 0
    })
    return await id.save();
}

module.exports = {
    ids,
    checkIdCollection
}
