
const mongoose = require('mongoose');
const express=require("express");
const bodyParser=require("body-parser");
const usersRouter = require('./routes/users');
const chatsRouter = require('./routes/chats');
const cors = require('cors');
const app = express();
const tokenService = require('./services/token');
const idColl = require('./models/ids');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/Users',usersRouter);
app.use('/api/Chats',chatsRouter);


mongoose.connect('mongodb://127.0.0.1:27017/chatApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
    });

app.post('/api/Tokens',tokenService.getToken);

// checking if idCollection exists, if not, creates it.
idColl.checkIdCollection();

// just testing id increments to later use inside controllers
idColl.nextId('messages');
idColl.nextId('chats');

app.listen(5000);
