const Balance = require("../models/balance");

const updateBalance = async (req, res) => {
    try{
        const id = req.user._id;
        await Balance.updateOne({userID: id}, { $set: {money: req.body.balance}});
    }catch(e){
        console.log("ERR", e);
    }
}

module.exports = {updateBalance};