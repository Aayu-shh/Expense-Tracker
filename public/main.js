const myForm = document.getElementById('my-expense-form');
const amt = document.querySelector('#amount');
const description = document.querySelector('#description');
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
        description: description.value,
        type: type.value
    }
    axios.post('http://localhost:5000/add-expense', exp)
        .then(() => {
            axios.get('http://localhost:5000/expenses')
                .then(resultObj => showOutput(resultObj.data[resultObj.data.length - 1]));
        })
        .catch(err => console.log(err));

})

function showOutput(res) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('Delete'))
    const editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'))
    li.appendChild(document.createTextNode(`${res.amount}: ${res.description} : ${res.type}`))
    delBtn.classList = 'btn btn-danger m-2';
    editBtn.classList = 'btn btn-warning';
    li.append(delBtn, editBtn);
    itemList.append(li);
    let expLocal = {
        amt: res.amount,
        description: res.description,
        type: res.type
    }
    delBtn.onclick = () => {
        axios.delete(`http://localhost:5000/delete-expense/${res.id}`)
            .then(() => {
                itemList.removeChild(li);
                console.log(expLocal.description + ' was deleted!');
            })


    }
    editBtn.onclick = () => {
        axios.delete(`http://localhost:5000/delete-expense/${res.id}`)
            .then(() => {
                itemList.removeChild(li);
                console.log('Editing:' + expLocal.description);
            })
        amt.value = expLocal.amt;
        description.value = expLocal.description;
        type.value = expLocal.type;
    }

    amt.value = "";
    description.value = "";
    type.value = "";
}