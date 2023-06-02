const mongoose = require('mongoose');
const idCollection = mongoose.model('ids')

async function checkIdCollection() {
    const isIdCollectionExists = await idCollection.exists();
    
    if (isIdCollectionExists) {
        console.log("IdColl exists!")
    } else {
        console.log("IdColl doesnt exist")
    }
}

module.exports = {
    checkIdCollection
}