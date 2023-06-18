const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const adminController = require('./controller/admin');
const db = require('./util/database');


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/expenses', adminController.showExpenses)

app.post('/add-expense', adminController.addExpense);

app.delete('/delete-expense/:id', adminController.deleteExpense);

app.listen(5000, () => {
    console.log('listening to port 5000')
})