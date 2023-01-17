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
        },
        {
          title: "ini judul",
          question: "ini pertanyaan",
          userId: 1,
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
