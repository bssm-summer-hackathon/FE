<<<<<<< HEAD
=======
// get the client
>>>>>>> 8c496121d7b86cc1bf51a1b74d8edf342fc7c83e
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
