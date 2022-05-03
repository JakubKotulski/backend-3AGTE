const History = require("../models/history");

const addHistory = async (req, res) => {

    try{
        const objectToInsert = new History({
            items: req.body.items,
            price: req.body.price,
            date: req.body.date,
            userID: req.user._id,
        })
    
        await objectToInsert.save();
        res.json(objectToInsert);
    }catch(e){
        console.log("ERR", e);
    }

}

module.exports = {addHistory};