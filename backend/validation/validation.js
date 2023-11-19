const {check, validationResult} = require("express-validator");
const {Op} = require("sequelize");
const model = require("../models/index");
module.exports = {
    forumValidate: [
        check("title")
            .notEmpty()
            .withMessage("kosong")
            .isLength({min: 2})
            .withMessage("karakter mininmal 2"),
        check("question").notEmpty().withMessage("kosong"),
    ],
    registerValidate: [
        check("email")
            .notEmpty()
            .withMessage("Email tidak boleh kosong")
            .isEmail()
            .withMessage("Email tidak valid")
            .custom((value) => {
                return model.User.findOne({
                    where: {email: value},
                }).then((user) => {
                    if (user) {
                        return Promise.reject("E-mail sudah digunakan");
                    }
                });
            }),
        check("name").notEmpty().withMessage("Name tidak boleh kosong"),

        check("password").notEmpty().withMessage("Password tidak boleh kosong"),

        check("password").custom((value, {req}) => {
            if (value !== req.body.confirmPassword) {
                return Promise.reject("Konfirmasi password tidak sama");
            }
            return true;
        }),
    ],

    loginValidate: [
        check("email")
            .notEmpty()
            .withMessage("Email tidak boleh kosong")
            .isEmail()
            .withMessage("Email tidak valid"),
        check("password").notEmpty().withMessage("Password tidak boleh kosong"),

    ],
};
