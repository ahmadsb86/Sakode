const { Sequelize, Op, Model, DataTypes  } = require('sequelize');
const app = require('express')();
const axios = require("axios");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const chalk = require('chalk');

app.get('/get')



app.listen(8080);
console.log(chalk.green('Server is listening on port 8080'));