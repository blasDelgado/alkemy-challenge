import { DataTypes } from "sequelize";
import sequelize from "../../database/database.js";
import MoviesCharacters from "../shared/movies-characters-model.js";

/**
 * @swagger
 * components:
 *  schemas:
 *      Characters:
 *        type: object
 *        properties:
 *          image_url:
 *            type: text
 *          name:
 *            type: string
 *          age:
 *            type: string
 *          weigth:
 *            type: string
 *          history:
 *            type: text
 *        required:
 *          - image_url
 *          - name
 *          - age
 *          - weight
 *          - history
 *        example:
 *          image_url: https://wwww.imagenesexample.com
 *          name: Mickey Mouse
 *          age: 92
 *          weight: 12
 *          history: In 1925, Hugh Harman drew some sketches of mice around a photograph of Walt Disney. These inspired Ub Iwerks to create a new mouse character for Disney. "Mortimer Mouse" had been Disney's original name for the character before his wife, Lillian, convinced him to change it, and ultimately Mickey Mouse came to be.
 *
 *
 *
 */

const Characters = sequelize.define("characters", {
  id_characters: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  image_url: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  history: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Characters.hasMany(MoviesCharacters, { foreignKey: "characters" });
MoviesCharacters.hasOne(Characters, {
  sourceKey: "characters",
  foreignKey: "id_characters",
});

export default Characters;
