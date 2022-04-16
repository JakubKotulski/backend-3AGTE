const Product = require("../models/product");

const getProducts = async (req, res) => {
    try{
        const data = await Product.find({sold: false});
        res.json(data);
    }catch(e){
        console.log(e);
    }
    // try{
    //     const { section } = req.body;
    //     const data = await Product.find({section, sold: false});
    //     res.json(data);
    // }catch(e){
    //     console.log("err ", e);
    // }

}

module.exports = { getProducts };