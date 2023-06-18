const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const adminController = require('./controller/admin');
const sequelize = require('./util/database1');


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/expenses', adminController.showExpenses)

app.post('/add-expense', adminController.addExpense);

app.delete('/delete-expense/:id', adminController.deleteExpense);

sequelize.sync()
.then(result => {
    app.listen(5000);
})
.catch(err => console.log(err));

