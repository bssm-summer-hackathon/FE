const mysql = require("mysql2/promise");
let connection;

const connect = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "whooing",
      password: "qpalzm0408",
    });
  }
};

const getConnection = () => {
  return connection;
};

module.exports = { connect, getConnection };
