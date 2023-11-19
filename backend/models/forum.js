"use strict";
const {Model, Op} = require("sequelize");
const moment = require("moment");
const slugify = require("slugify");
moment.tz.setDefault("Asia/Jakarta");
moment.locale("id");

module.exports = (sequelize, DataTypes) => {
    class Forum extends Model {
        static associate(models) {
            Forum.belongsTo(models.User, {as: "user"});
            Forum.hasMany(models.Answer, {as: "answers", onDelete: "CASCADE", foreignKey: "forumId"});
        }
    }

    Forum.init(
        {
            title: DataTypes.STRING,
            question: DataTypes.TEXT,
            userId: DataTypes.INTEGER,
            slug: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Forum",
            tableName: "forums",
        }
    );

    Forum.addHook("beforeCreate", async (forum, options) => {
        forum.createdAt = moment().toISOString();
        forum.updatedAt = moment().toISOString();

        let baseSlug = slugify(forum.title, {lower: true});
        let slug = baseSlug;

        let counter = 1;
        while (true) {
            const existingForum = await Forum.findOne({
                where: {
                    slug: {
                        [Op.like]: `${slug}%`,
                    },
                },
            });

            if (!existingForum) {
                break;
            }

            counter++;
            slug = `${baseSlug}-${counter}`;
        }

        forum.slug = slug;
    });

    Forum.addHook("beforeUpdate", (forum, options) => {
        forum.updatedAt = moment().toISOString();
    });

    return Forum;
};
