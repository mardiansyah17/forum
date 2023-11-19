"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Answer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Answer.init(
        {
            answer: DataTypes.STRING,
            userId: DataTypes.INTEGER,
            forumId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Answer",
            tableName: "answers",
        }
    );
    Answer.associate = (model) => {
        Answer.belongsTo(model.Forum, {onDelete: "CASCADE"});
        Answer.belongsTo(model.User, {as: "user"});
    };
    return Answer;
};
