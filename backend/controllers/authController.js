const { validationResult } = require("express-validator");
const model = require("../models/index");
const { Op } = require("sequelize");
const bycript = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, name, password, confirmPassword } = req.body;

    const user = await model.User.findOne({
      where: { [Op.or]: [{ email }] },
    });
    if (user) {
      if (email === user.email)
        return res.status(400).json({ message: "Email sudah terdaftar", status: 400 });
    }
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password tidak sama", status: 400 });
    res.json({
      status: 200,
      user: await model.User.create({
        email,
        name,
        password: await bycript.hash(password, 10),
      }),
    });
  } catch (error) {
    res.json(error.message);
  }
};

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await model.User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ message: "Email atau password salah" });

    const token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: "3h" });
    res.send(token);
  } catch (error) {
    res.json(error.message);
  }
};
