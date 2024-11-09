const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

const config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
};

app.get("/", async (req, res) => {
  const connection = await mysql.createConnection(config);
  await connection.query(
    "CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL)"
  );
  const names = [
    'João Silva', 'Maria Oliveira', 'Carlos Eduardo', 'Ana Paula', 'Pedro Henrique',
    'Mariana Souza', 'Fernanda Lima', 'Rafael Costa', 'Juliana Alves', 'Gustavo Pereira'
  ];
  
  const queries = names.map(name => connection.query('INSERT INTO people (name) VALUES (?)', [name]));
  await Promise.all(queries);

  const [rows] = await connection.query("SELECT name FROM people");
  const namesList = rows.map((row) => `<li>${row.name}</li>`).join("");
  res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`);
  await connection.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
