"use strict";
const { Model } = require("sequelize");
const moment = require("moment");
const user = require("./user");
moment.tz.setDefault("Asia/Jakarta");
moment.locale("id");
const model = require("../models/index");
module.exports = (sequelize, DataTypes) => {
  class forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  forum.init(
    {
      title: DataTypes.STRING,
      question: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "forum",
      tableName: "forums",
    }
  );

  forum.addHook("beforeCreate", async (f, op) => {
    f.dataValues.createdAt = moment().toISOString();
    f.dataValues.updatedAt = moment().toISOString();
  });
  forum.addHook("beforeUpdate", async (f, op) => {
    f.dataValues.updatedAt = moment().toISOString();
  });
  forum.associate = (model) => {
    forum.belongsTo(model.User, { as: "user" });
    forum.hasMany(model.Answer, { as: "answers", onDelete: "CASCADE", foreignKey: "forumId" });
  };
  return forum;
};
