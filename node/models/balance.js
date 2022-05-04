const User = require("../models/user");
const mongoose = require("mongoose")

const balance = new mongoose.Schema({
    money: Number,
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
})

module.exports = mongoose.model("Balance", balance);