const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const express = require("express");
const { loginAction } = require("./node/actions/loginAction");
const { addProduct } = require("./node/actions/addProduct"); 
const { getProducts } = require("./node/actions/getProducts");
const { markSoldProduct } = require("./node/actions/markSoldProduct");
const { updateProduct } = require("./node/actions/updateProduct");

mongoose.connect("mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/school-project-backend", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);