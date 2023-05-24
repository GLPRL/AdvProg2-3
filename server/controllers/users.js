const User = require('../models/users');
const userService = require('../services/users');
const createUser = async (req,res) => {
    console.log("hii");
    const username=req.body.username;
    const user =await User.findOne({username});
    if(user){
        res.status(409).json({ title: "Conflict",status: "409"});
    }
    else {
        res.status(200).json(await userService.createUser(req.body.username, req.body.password, req.body.displayName, req.body.profilePic));
    }

}

module.exports = {
    createUser
};