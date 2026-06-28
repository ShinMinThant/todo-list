const input = document.querySelector('#taskInput');
const button = document.querySelector('#addBtn');
const ul = document.querySelector('#taskList');
const del = document.querySelector("#delBtn");

button.addEventListener("click", addTask);

function addTask() {
    let value = input.value;
    let li = document.createElement("li");
    li.textContent = value;
    ul.append(li);
    input.value = "";
}

ul.addEventListener('click', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.style.textDecoration = 'line-through';
    }
})


del.addEventListener('click',(event)=>{
   ul.innerHTML='';
})