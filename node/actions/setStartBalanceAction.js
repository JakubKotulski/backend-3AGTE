const Balance = require("../models/balance");

const setBalance = async (req, res) => {
    try{
        const accountBalance = new Balance({
            money: 0,
            userID: req.body.id,
        })

        await accountBalance.save()
    }catch(e){
        console.log("ERR", e);
    }
}

module.exports = {setBalance};