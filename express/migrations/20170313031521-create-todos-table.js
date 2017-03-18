"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("Todos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: Sequelize.STRING,
      completed: Sequelize.BOOLEAN
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("Todos");
  }
};
