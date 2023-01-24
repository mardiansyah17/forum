const { check } = require("express-validator");

module.exports = {
  createAnswer: [
    check("forumId").notEmpty().withMessage("kosong"),
    check("answer")
      .notEmpty()
      .withMessage("Jawaban tidak boleh kosong")
      .isLength({ min: 5 })
      .withMessage("Jawaban minimal 5 karakter"),
  ],
};
