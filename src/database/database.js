import sequelize from "sequelize";
import config from "../config/config.js";

const dataBase = new sequelize(
  config.database,
  config.db_user,
  config.db_password,
  {
    host: config.db_host,
    dialect: config.db_dialect,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);
export default dataBase;
