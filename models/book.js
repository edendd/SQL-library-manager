const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Book extends Sequelize.Model {}
  Book.init({
    title: {
      type: Sequelize.STRING,
      allowNull: false, // helps to prevent null values
      validate: {
        //add validation with error messages
        notNull: {
          msg: '"Title" cannot be empty',
        },
        notEmpty: {
          msg: '"Title" cannot be empty',
        },
      },
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        //add validation with error messages
        notNull: {
          msg: '"Title" cannot be empty',
        },
        notEmpty: {
          msg: '"Title" cannot be empty',
        },
      },
    },
    genre: {
      type: Sequelize.STRING,
     
    },
    year: {
      type: Sequelize.INTEGER,
    },
  },
  { sequelize }
  );
return Book;

};
