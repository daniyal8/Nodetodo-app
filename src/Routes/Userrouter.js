const express = require("express");

const { UserControllers } = require("../controllers");

const app = express();
var cors = require('cors')
const router = express.Router();

app.use(cors())

router.post("/signin", UserControllers.signin);
router.post("/signup", UserControllers.signUpUser);

exports.userRouter = app.use("/User", router);