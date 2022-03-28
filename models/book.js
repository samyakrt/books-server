'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.Author, {
        foreignKey:'authorId'
      });

      Book.belongsTo(models.User, {
        foreignKey: 'addedBy'
      })
    }
  }
  Book.init({
    name: DataTypes.STRING,
    isbn: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    authorId: DataTypes.INTEGER,
    addedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
    hasTrigger: true
  });
  return Book;
};