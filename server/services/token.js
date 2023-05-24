const jwt = require("jsonwebtoken");
const User = require('../models/users');
const getToken= async (req, res) => {
   const username =req.body.username;
   const password=req.body.password;
    console.log("im in get token");
    try {
        // Find user in the MongoDB collection
        const user = await User.findOne({ username, password });

        if (user) {
            // Generate and return a token
            console.log("there is a user");
            const token = jwt.sign({ username }, 'key');
            res.status(200).send(token);
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports={
    getToken
}