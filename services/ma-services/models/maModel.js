// Sequelize model for MA service
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';

const MaModel = sequelize.define('Ma', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
});

export default MaModel;
