"use strict";
module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define("Article", {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        this.belongsTo(models.Author);
      }
    }
  });
  return Article;
};