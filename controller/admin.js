const db = require('../util/database');

exports.addExpense = (req, res) => {
    const amt = req.body.amount;
    const desc = req.body.descp;
    const type = req.body.type;
    db.execute('INSERT INTO expenses(amount,descp,type) VALUES(?,?,?)', [amt, desc, type])
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