const { validationResult } = require("express-validator");
const model = require("../models/index");
const jwt = require("jsonwebtoken");

exports.answerCreate = async (req, res) => {
  try {
    const token = req.header("token");
    const user = jwt.verify(token, process.env.SECRET_KEY);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { answer, forumId } = req.body;
    const resAnswer = await model.Answer.create({
      answer,
      forumId,
      userId: user.id,
    });
    return res.status(200).json({
      id: resAnswer.id,
      answer: resAnswer.answer,
      forumId: resAnswer.forumId,
      userId: resAnswer.userId,
      updatedAt: resAnswer.updatedAt,
      createdAt: resAnswer.createdAt,
      user,
    });
  } catch (error) {
    res.send(error);
  }
};

exports.updateAnswer = async (req, res) => {
  try {
    const token = req.header("token");
    const user = jwt.verify(token, process.env.SECRET_KEY);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { answer, forumId } = req.body;
    const resAnswer = await model.Answer.findByPk(req.params.id);
    resAnswer.answer = answer;
    resAnswer.save();
    res.json(resAnswer);
  } catch (error) {
    res.json(error);
  }
};

exports.deleteAnswer = async (req, res) => {
  try {
    const resAnswer = await model.Answer.findByPk(req.params.id);
    resAnswer.destroy();
    res.json({ message: "Jawaban berhasil di hapus" });
  } catch (error) {}
};
