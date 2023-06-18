const db = require('../util/database');

exports.addExpense = (req,res)=>{
    const amt = req.body.amt;
    const desc = req.body.desc;
    const type = req.body.type;
    db.execute('INSERT INTO expenses(amount,descp,type) VALUES(?,?,?)', [amt, desc, type])
    .then(result=>{
        if(result.affectedRows>0) res.send("Data Inserted successfully");
    })
    .catch(err => console.log(err));
}


exports.showExpenses = (req,res)=>{
    db.execute('SELECT * FROM expenses')
    .then(result => res.send(result[0]))           //Array of Expense Objs
    .catch(err => console.log(err));
}