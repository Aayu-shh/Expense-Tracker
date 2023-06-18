const myForm = document.getElementById('my-expense-form');
const amt = document.querySelector('#amount');
const desc = document.querySelector('#description');
const type = document.getElementById('expenseType');

const itemList = document.querySelector('.items');

window.addEventListener('DOMContentLoaded', (e) => {
    axios.get('http://localhost:5000/expenses')
        .then(resultObj => {
            (resultObj.data).forEach(exp => {
                showOutput(exp);
            });
        })
        .catch(err => console.log(err));
});

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let exp = {
        amount: amt.value,
        descp: desc.value,
        type: type.value
    }
    axios.post('http://localhost:5000/add-expense', exp)
        .then(() => showOutput(exp))
        .catch(err=>console.log(err));
        
})

function showOutput(res) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('Delete'))
    const editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'))
    li.appendChild(document.createTextNode(`${res.amount}: ${res.descp} : ${res.type}`))
    delBtn.classList = 'btn btn-danger m-2';
    editBtn.classList = 'btn btn-warning';
    li.append(delBtn, editBtn);
    itemList.append(li);
    let expLocal = {
        amt: res.amount,
        desc: res.descp,
        type: res.type
    }
    delBtn.onclick = () => {
        itemList.removeChild(li);
        console.log(expLocal.desc + ' was deleted!');
    }
    editBtn.onclick = () => {
       
        console.log('Editing:'+ expLocal.desc);
    }
}