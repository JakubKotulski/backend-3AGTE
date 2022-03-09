const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const express = require("express");
const { loginAction } = require("./node/actions/loginAction");
const { addProduct } = require("./node/actions/addProduct.js"); 
const { getProducts } = require("./node/actions/getProducts");
const { markSoldProduct } = require("./node/actions/markSoldProduct");
const { updateProduct } = require("./node/actions/updateProduct");

const {registerAction} = require('./node/actions/register')
const {userdelateAction} = require('./node/actions/userDelate')
const {UpdateUser} = require('./node/actions/updateUser')

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


app.post("/product", addProduct);
app.get("/product", getProducts);
app.patch("/product/:id/sold", markSoldProduct);
app.put("/product/:id", updateProduct);

app.post('/user', registerAction);
app.delete('/user/:id/delete', userdelateAction)
app.put("/product/:id", UpdateUser);

app.listen(4000, () => {
    console.log("Server has started");
  });