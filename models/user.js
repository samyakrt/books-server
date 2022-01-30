'use strict';
const {
  Model
} = require('sequelize');

const { generateHash } = require('~utility/password');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    emailVerifiedAt: DataTypes.DATE,
    password: DataTypes.STRING,
    userType: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(record, options) {
        console.log({ record, options });
        record.password = generateHash(record.password)
      }
    }
  });
  return User;
};