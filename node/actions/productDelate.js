const Product = require("../models/product")

const productDelate = async (req, res) => {
    try{
        const producttodelete = await Product.findByIdAndRemove(req.params.id);
        res.status(200);
    }
    catch(err){
        console.log("err ", err);
    }
}

module.exports = {productDelate}