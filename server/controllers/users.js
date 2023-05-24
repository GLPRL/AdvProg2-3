
const userService = require('../services/users');
const createUser = async (req,res) => {
    console.log("hii");

    res.status(200).json(await userService.createUser(req.body.username,req.body.displayName,req.body.password,req.body.profilePic));

}

module.exports = {
    createUser
};