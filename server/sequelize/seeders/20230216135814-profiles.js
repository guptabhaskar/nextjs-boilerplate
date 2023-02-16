"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("profiles", [
      {
        name: "Bhaskar",
        email: "guptabhanu1999@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bhanu",
        email: "bhaskar19237@iiitd.ac.in",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("profiles", null, {});
  },
};
