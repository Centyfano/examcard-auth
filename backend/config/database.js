const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "./config/config.env" });

// const db = async () => {
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
try {
  sequelize.authenticate();
  console.log("SQL successfully connected");
} catch (error) {
  console.error(`Failed to connect: ${error.message}`);
}
// };
module.exports = sequelize;
