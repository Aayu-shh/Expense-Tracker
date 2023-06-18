const express = require('express');
const cors = require('cors');

const db = require('./util/database');

const app = express();

app.use(cors());

app.use('/',(req,res)=>{
    db.execute('SELECT * FROM expenses')
        .then(result => res.send(result[0]))
        .catch(err => console.log(err));
    
});

app.listen(5000,()=>{
    console.log('listening to port 5000')
})