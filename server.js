const express = require('express');
const app = express();

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser')
sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const {
  User,
  Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8;');

app.post('/add/data', (req, res) => {
        User.create({
        account  : req.body.account,
        password : req.body.password,
        name     : req.body.name,
        image    : req.body.image,
        birthday : req.body.birthday,
        gender   : req.body.gender,
        job      : req.body.job
    })
    .then( result => {
        res.send(result)
    })
    .catch( err => {
        console.log(err)
        throw err;
    })
}) 

app.get('/get/data', (req, res) => {
     users.findAll()
    .then( result => { res.send(result) })
    .catch( err => { throw err })
}) 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server On : ashttp://localhost:${PORT}/`);
})