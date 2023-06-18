const Expense = require('../model/expense');

exports.addExpense = (req, res) => {
    const amt = req.body.amount;
    const desc = req.body.description;
    const typ = req.body.type;
    Expense.create({ amount: amt, description: desc, type: typ })
        .then(result => res.send(result.dataValues));
}


exports.showExpenses = (req, res) => {
    Expense.findAll()
        .then(result => res.send(result))
        .catch(err => console.log(err));
}

exports.deleteExpense = (req, res) => {
    Expense.findByPk(req.params.id)
        .then(result => Expense.destroy({
            where: {
                id: result.dataValues.id
            }
        })
        .then(deletedRow =>{
            res.send('Deleted');
        })
        .catch(err => console.log('Error Deleting Row:',err)));
}