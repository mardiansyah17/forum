const { validationResult } = require("express-validator");
const model = require("../models/index");
const jwt = require("jsonwebtoken");
exports.forumCreate = async (req, res) => {
  try {
    const token = req.header("token");
    const user = jwt.verify(token, process.env.SECRET_KEY);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, question } = req.body;
    const forum = await model.forum.create({
      title,
      question,
      userId: user.id,
    });
    return res.json(forum);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.forumGet = async (req, res) => {
  try {
    const forums = await model.forum.findAll();
    res.json(forums);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.forumUpdate = async (req, res) => {
  try {
    const forum = await model.forum.findByPk(req.params.id);
    forum.title = req.body.title;
    forum.question = req.body.question;
    await forum.save();
    return res.json({
      message: "berhasil update data",
      data: forum,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
exports.forumDelete = async (req, res) => {
  try {
    const forum = await model.forum.findByPk(req.params.id);
    forum.destroy();
    res.status(200).json({ message: "berhasil hapus" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOneForum = async (req, res) => {
  try {
    const forum = await model.forum.findByPk(req.params.id, {
      include: [model.User],
    });
    res.json(forum);
  } catch (error) {
    res.json(error);
  }
};
