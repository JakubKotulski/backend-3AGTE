const Product = require("../models/product");

const markSoldProduct = async (req, res) => {
    try{
        await Product.updateOne({_id: req.params.id}, {$set: {sold: true} });
        res.status(200);
    }catch(e){
        console.log("err ", e);
    }
}

module.exports = { markSoldProduct };