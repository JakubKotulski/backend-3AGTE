const History = require("../models/history");

const getHistory = async (req, res) => {
    const id = req.user._id;
    try{
        const history = await History.find({userID : id});
        res.json(history); 
    }catch(e){
        console.log("ERR", e);
    }
}

module.exports = {getHistory}