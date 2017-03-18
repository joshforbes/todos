"use strict";

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {}
  });

  return Todo;
};