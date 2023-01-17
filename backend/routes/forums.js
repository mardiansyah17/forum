var express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");

const {
  forumCreate,
  forumGet,
  forumUpdate,
  forumDelete,
  getOneForum,
} = require("../controllers/forumController");
const { forumValidate } = require("../validation/validation");
const auth = require("../middleware/auth");

// create forum
router.post("/", auth, forumValidate, forumCreate);
// get forum
router.get("/", forumGet);
// update forum

// get one forum
router.get("/:id", getOneForum);

router.put("/:id", forumValidate, forumUpdate);
// delete forum
router.delete("/:id", forumDelete);

module.exports = router;
