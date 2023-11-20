var express = require("express");
var router = express.Router();
const {body, validationResult} = require("express-validator");

const {
    forumCreate,
    forumGet,
    forumUpdate,
    forumDelete,
    getOneForum,
    getMyForums,
} = require("../controllers/forumController");
const {forumValidate} = require("../validation/validation");
const auth = require("../middleware/auth");

router.get("/my-forums", auth, getMyForums);

// create forum
router.post("/", auth, forumValidate, forumCreate);
// get forum
router.get("/", forumGet);

// get one forum
router.get("/:slug", getOneForum);

router.put("/:id", auth, forumValidate, forumUpdate);
// delete forum
router.delete("/:id", auth, forumDelete);

module.exports = router;
