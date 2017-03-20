"use strict";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Todo",
    {
      name: DataTypes.STRING,
      completed: DataTypes.BOOLEAN
    },
    {
      classMethods: {}
    }
  );
};
