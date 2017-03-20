"use strict";

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Todos",
      [
        {
          name: "Test Todo",
          completed: false,
          createdAt: Date.now(),
          updatedAt: Date.now()
        },
        {
          name: "Another Todo",
          completed: false,
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
      ],
      {}
    );
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Todos", null, {});
  }
};
