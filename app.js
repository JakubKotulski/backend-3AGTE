const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const express = require("express");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");


const { loginAction } = require("./node/actions/loginAction");
const { addProduct } = require("./node/actions/addProduct.js"); 
const { getProducts } = require("./node/actions/getProducts");
const { markSoldProduct } = require("./node/actions/markSoldProduct");
const { updateProduct } = require("./node/actions/updateProduct");
const {deleteProduct} = require('./node/actions/deleteProducts');

const {registerAction} = require('./node/actions/register');
const {userdelateAction} = require('./node/actions/userDelate');
const {UpdateUser} = require('./node/actions/updateUser');
const {getLoggedUserAction} = require("./node/actions/getLoggedUserAction");

const {logoutAction} = require("./node/actions/logout");
const {addHistory} = require("./node/actions/addHistory");
const {getHistory} = require("./node/actions/getHistoryAction");

const {updateBalance} = require("./node/actions/updateBalanceAction");
const {setBalance} = require("./node/actions/setStartBalanceAction");
const {getBalance} = require("./node/actions/getBalanceAction");

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

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/school-project-backend",
    }),
    ...(process.env.COOKIE_DOMAIN
      ? { cookie: { domain: process.env.COOKIE_DOMAIN, httpOnly: false, sameSite: "None", secure: true } }
      : {}),
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./node/passport-config")(passport);

app.post("/product", addProduct);
app.get("/product", getProducts);
app.patch("/product/:id/sold", markSoldProduct);
app.put("/product/:id", updateProduct);
app.delete("/product/:id/delete", deleteProduct);

app.post('/user', registerAction);
app.post("/users/login", loginAction);
app.delete('/user/:id/delete', userdelateAction);
app.put("/user/:id", UpdateUser);
app.get("/user/me", getLoggedUserAction);

app.post("/logout", logoutAction);

app.post("/history", addHistory);
app.get("/history/my", getHistory);

app.put("/balance-update", updateBalance);
app.post("/balance", setBalance);
app.get("/get-balance", getBalance)

app.listen(4000, () => {
    console.log("Server has started");
  });