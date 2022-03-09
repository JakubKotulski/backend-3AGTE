const User = require("../models/user")

const UpdateUser = async(req, res) =>{
    try{
        const {username, email, password} = req.body;
        await User.updateOne({_id: req.params.id}, {$set: {username, email, password}})
        res.status(200);
    }
    catch(error){
        console.log("error", error);
    }
}

module.exports = {UpdateUser}