import { DataTypes } from "sequelize";
import sequelize from "../../database/database.js";
import Characters from "../characters/characters-model.js";

const MoviesCharacters = sequelize.define("movies_characters", {
  id_movies_characters: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  characters: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  movies: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default MoviesCharacters;
