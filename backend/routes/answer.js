var express = require("express");
const { answerCreate, updateAnswer, deleteAnswer } = require("../controllers/answersController");
const auth = require("../middleware/auth");
const answerValidation = require("../validation/answerValidation");
var router = express.Router();

router.post("/", auth, answerValidation.createAnswer, answerCreate);
router.put("/:id", auth, answerValidation.createAnswer, updateAnswer);
router.delete("/:id", auth, deleteAnswer);

module.exports = router;
