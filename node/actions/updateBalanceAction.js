const Balance = require("../models/balance");

const updateBalance = async (req, res) => {
    try{
        await Balance.updateOne({userID: req.body.userID}, { $set: {money: req.body.balance}});
    }catch(e){
        console.log("ERR", e);
    }
}

module.exports = {updateBalance};