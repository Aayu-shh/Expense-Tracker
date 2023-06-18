const myForm = document.getElementById('my-expense-form');
const amt = document.querySelector('#amount');
const desc = document.querySelector('#description');
const type = document.getElementById('expenseType');

const itemList = document.querySelector('.items');


console.log(amt.value)

window.addEventListener('DOMContentLoaded',(e)=>{
    showOutput() //to add a loop onto gotten Data
});

myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let exp = {
        amt: amt.value,
        desc: desc.value,
        type: type.value
    }
    showOutput(exp);
})

function showOutput(res){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('Delete'))
    const editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'))
    li.appendChild(document.createTextNode(`${res.amt}: ${res.desc} : ${res.type}`))
    delBtn.classList = 'btn btn-danger m-2';
    editBtn.classList = 'btn btn-warning';
    li.append(delBtn,editBtn);
    itemList.append(li);
    let expLocal = {
        amt: amt.value,
        desc: desc.value,
        type: type.value
    }
    delBtn.onclick = ()=>{
        itemList.removeChild(li);
        console.log(expLocal.desc + ' was deleted!');
    }
    editBtn.onclick = ()=>{
        console.log("Edit Button clicked");
    }
}