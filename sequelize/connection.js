const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(
  process.env.AIVEN_CLOUD_URL,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true, // fuerza a validar el certificado
        ca: fs.readFileSync(path.join(__dirname, "ca.pem")).toString(),
      },
    },
  }
);

module.exports = { sequelize };
