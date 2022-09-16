import { DataTypes } from "sequelize";
import sequelize from "../../database/database.js";

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *          email:
 *            type: string
 *          password:
 *            type: string
 *        required:
 *          - username
 *          - email
 *          - password
 *        example:
 *          username: Example23
 *          email: example23@mail.com
 *          password: secret
 *
 *
 */

const User = sequelize.define("app_users", {
  id_users: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
