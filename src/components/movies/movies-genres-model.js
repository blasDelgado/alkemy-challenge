import sequelize from "../../database/database.js";
import { DataTypes } from "sequelize";

const MoviesGenre = sequelize.define("movies_genres", {
  id_genre: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: false,
  },
});

export default MoviesGenre;
