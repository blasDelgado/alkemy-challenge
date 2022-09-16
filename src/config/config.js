import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  db_host: process.env.DB_HOST,
  db_dialect: process.env.DB_DIALECT,
  database: process.env.DATABASE,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  token_crypt: process.env.TOKEN_CRYPT,
  sendgrid_key: process.env.SENDGRID_KEY,
  sendgrid_email: process.env.SENDGRID_EMAIL,
};

export default config;
