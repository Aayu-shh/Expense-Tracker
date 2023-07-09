const db = require('../util/database');

exports.addExpense = (req, res) => {
    const amt = req.body.amount;
    const description = req.body.description;
    const type = req.body.type;
    db.execute('INSERT INTO expenses(amount,description,type) VALUES(?,?,?)', [amt, description, type])
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err));
}


exports.showExpenses = (req, res) => {
    db.execute('SELECT * FROM expenses')
        .then(result => res.send(result[0]))           //Array of Expense Objs
        .catch(err => console.log(err));
}

exports.deleteExpense = (req, res) => {
    db.execute("DELETE FROM expenses WHERE id=?", [req.params.id])
        .then(result => res.send(result))
        .catch(err => console.log(err));
}