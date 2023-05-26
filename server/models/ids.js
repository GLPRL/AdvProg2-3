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
        console.log("IdColl doesnt exist, creating idCollection with needed id's")
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

async function nextId(idName) {

    const nextId = await ids.findOneAndUpdate({name: idName}, {$inc: {currentId: 1}}, {new: true})
    if (nextId) {
        console.log("current id for " + idName + " is : " + nextId.currentId)
    }
    return nextId;
}

module.exports = {
    ids,
    checkIdCollection,
    nextId
}
