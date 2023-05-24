
const mongoose = require('mongoose');
const express=require("express");
const bodyParser=require("body-parser");
const usersRouter = require('./routes/users');
const cors = require('cors');
const app = express();
const tokenService = require('./services/token');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/Users',usersRouter);
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

app.listen(5000);
