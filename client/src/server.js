const fs = require('fs');
const databaseIn = require('./Seq/database');
const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/api/userArr', (req, res) => {
    databaseIn.query("select * from user", (err, data) => {
        if(!err) {
            res.send(data);

        } else {
            console.log(err);
            res.send(err);
        }
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));