import { DataTypes } from "sequelize";
import sequelize from "../../database/database.js";
import MoviesCharacters from "../shared/movies-characters-model.js";
import MoviesGenre from "./movies-genres-model.js";

/**
 * @swagger
 * components:
 *  schemas:
 *      Movies:
 *        type: object
 *        properties:
 *          image_url:
 *            type: text
 *          title:
 *            type: string
 *          creation_date:
 *            type: string
 *          rating:
 *            type: integer
 *            minimum: 1
 *            maximum: 5
 *          genre:
 *            type: integer
 *
 *        required:
 *          - image_url
 *          - title
 *          - creation_date
 *          - rating
 *          - genre
 *        example:
 *          image_url: https://wwww.imagenesexample.com
 *          title: Movie Example
 *          creation_date: 1970-01-01
 *          rating: 4
 *          genre: 1
 *
 *
 *
 */

const Movies = sequelize.define("movies", {
  id_movies: {
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
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  creation_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  genre: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Movies.hasMany(MoviesCharacters, { foreignKey: "movies" });
MoviesCharacters.hasOne(Movies, {
  sourceKey: "movies",
  foreignKey: "id_movies",
});
Movies.hasOne(MoviesGenre, { foreignKey: "id_genre" });
MoviesGenre.hasOne(Movies, { foreignKey: "genre" });
export default Movies;
