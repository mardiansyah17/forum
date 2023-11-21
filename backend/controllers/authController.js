const {validationResult} = require("express-validator");
const model = require("../models/index");
const {Op} = require("sequelize");
const bycript = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {handleValidationErrors} = require("../lib/handleValidationErrors");
exports.register = async (req, res, next) => {
    try {
        const {email, name, password} = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: handleValidationErrors(errors.array())});
        }

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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: handleValidationErrors(errors.array())});
        }
        const {email, password} = req.body;
        const user = await model.User.findOne({where: {email}, attributes: ["id", "email", "name", "password"]});

        if (!user) return res.status(401).json({message: "Email atau password salah"});
        console.log(user.password)
        const match = await bycript.compare(password, user.password);
        if (!match) {
            return res.status(400).json({message: "Email atau password salah"});
        }
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                name: user.name,
            },
            process.env.SECRET_KEY,
            {expiresIn: "3h"}
        );
        res.json({
            status: 200,
            token,

        });
    } catch (error) {
        res.json(error.message);
    }
};
