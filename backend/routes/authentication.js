var express = require("express");
const { register, loginController } = require("../controllers/authController");
var router = express.Router();
const jwt = require("jsonwebtoken");
const { registerValidate } = require("../validation/validation");

router.post("/register", registerValidate, register);
router.post("/login", loginController);
router.get("/tes", async (req, res) => {
  res.json("user");
});
module.exports = router;
