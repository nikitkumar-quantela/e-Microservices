// Shared Database Configuration File
import { Sequelize } from 'sequelize';

// Function to create a database connection for any service
const createDbConnection = (dbName) => {
  return new Sequelize(dbName, 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql', 
  });
};

export default createDbConnection;
