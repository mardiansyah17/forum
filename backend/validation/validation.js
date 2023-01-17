const { check, validationResult } = require("express-validator");

module.exports = {
  forumValidate: [
    check("title")
      .notEmpty()
      .withMessage("kosong")
      .isLength({ min: 2 })
      .withMessage("karakter mininmal 2"),
    check("question").notEmpty().withMessage("kosong"),
  ],
  registerValidate: [
    check("email").notEmpty().withMessage("Email tidak boleh kosong"),
    check("name").notEmpty().withMessage("Username tidak boleh kosong"),
    check("password").notEmpty().withMessage("Password tidak boleh kosong"),
    check("confirmPassword").notEmpty().withMessage("Password tidak boleh kosong"),
  ],
};
