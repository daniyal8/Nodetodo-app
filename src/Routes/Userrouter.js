const express = require("express");

const { UserControllers } = require("../controllers");

const app = express();
const router = express.Router();


router.post("/signin", UserControllers.signin);
router.post("/signup", UserControllers.signUpUser);

exports.userRouter = app.use("/User", router);