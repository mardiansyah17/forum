"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "forums",
            [
                {
                    title: "ini judul",
                    question: "ini pertanyaan",
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: "ini judul",
                    question: "ini pertanyaan",
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         */
        await queryInterface.bulkDelete("forums", null, {});
    },
};
