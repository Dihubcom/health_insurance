// require necessary dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

// create an express app
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

// create connection to the MySQL database
const connection = mysql.createConnection({
  host: 'pscprime.com',
  user: 'pscprim1_interns',
  password: 'interns@2019',
  database: 'pscprim1_health_insurance',
});

/**
 * database tables
 * - contributions
 *   - beneficiaryNo
 *   - hospitalNo
 *   - occupation
 *   - amount
 * - beneficiaries
 *   - beneficiaryNo
 *   - name
 *   - address
 *   - phone
 *   - occupation
 *   - age
 *   - hospital
 *   - gender
 * - hospitals
 *   - hcfNo
 *   - hcfName
 *   - address
 *   - phone
 *   - contactPerson
 *   - email
 */

// routes starts here
app.get('/', (req, res) => {
  res.json({ greetings: 'Hello' });
});

// route for fetching all users
app.get('/users/all', (req, res) => {
  connection.query('SELECT * FROM `users`', function(err, results, fields) {
    res.json({ users: results });
  });
});

// create a user
app.post('/users/new', (req, res) => {
  const { name, email, age } = req.body;
  console.log(req.body);

  connection.query(
    `INSERT INTO users(name, email, age) VALUES ("${name}","${email}","${age}")`,
    (err, results) => {
      res.json({ results });
    }
  );
});

// listen for the app
app.listen(4001, () => console.log('App is running on port 4000'));
