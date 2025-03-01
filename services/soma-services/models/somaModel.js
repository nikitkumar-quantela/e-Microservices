// Sequelize model for SOMA service
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';

const SomaModel = sequelize.define('Soma', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  // Add other fields as necessary
});

export default SomaModel;
