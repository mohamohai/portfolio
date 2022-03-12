const express = require('express');
const app = express();

const sequelize = require('./Seq').sequelize;
sequelize.sync();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})