const Product = require("../models/product");

const addProduct = async (req, res) => {
    try{

        const product = new Product({
            name : req.body.name,
            price : req.body.price, 
            url : req.body.url,
            sold : false,
            section: req.body.section,
        })

        await product.save();
        res.json(product);
    }catch(e){
        console.log("err ", e);
    }
}

module.exports = { addProduct };