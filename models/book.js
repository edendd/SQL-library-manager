"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false, //set the allowNull property to false
        validate: {
          //add validation and appropriate error messages
          notNull: {
            msg: '"Title" cannot be empty',
          },
          notEmpty: {
            msg: '"Title" cannot be empty',
          },
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false, //set the allowNull property to false
        validate: {
          //add validation and appropriate error messages
          notNull: {
            msg: '"Author" cannot be empty',
          },
          notEmpty: {
            msg: '"Author" cannot be empty',
          },
        },
      },
      genre: DataTypes.STRING,
      year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
