'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order)
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    paranoid: true,
    timestamps: false,
    modelName: 'User',
  });

  User.addScope('listAdmin', {
    where: {
      is_admin: true
    }
  })
  return User;
};