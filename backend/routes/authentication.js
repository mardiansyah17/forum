var express = require("express");
const {register, loginController} = require("../controllers/authController");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {registerValidate, loginValidate} = require("../validation/validation");

router.post("/register", registerValidate, register);
router.post("/login", loginValidate, loginController);
router.get("/tes", async (req, res) => {
    res.json("user");
});
module.exports = router;
