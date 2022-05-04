const Balance = require("../models/balance");

const getBalance = async (req, res) => {
    const id = req.user._id;
    try{
        const balance = await Balance.find({userID : id});
        res.json(balance); 
    }catch(e){
        console.log("ERR", e);
    }
}

module.exports = {getBalance}