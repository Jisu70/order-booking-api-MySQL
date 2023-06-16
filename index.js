// Dependencies
const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.json());

const table1Router = require('./route/table1.route.js');

const database = require('./model/table1.model.js');

app.use(table1Router);

// To define the model in dtabase
database.sequelize
  .sync()
  .then( result => console.log(result))
  .catch((err) => console.log(err));


// Starting the server
app.listen(3000, (err) => {
  if (err) throw err;
  console.log(' app listen on port 3000 ');
});
