'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }
  Workout.init({
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Workout',
  });
  return Workout;
};