// json-server --watch db.json

const doc = document;

const api = {
    todos: `http://localhost:3000/todos`,
}

let todos = [];



getData(api.todos)
    .then(data => {
        data.forEach(todo => todos.push(todo.body));
        renderTodos(todos, '.todos');
        console.log(todos);
    })
    .catch(error => {
        console.error('Введіть у консоль: json-server --watch db.json', error);
    });



// ----Code----
let users = document.querySelector(".users");
let history = document.querySelector(".history");
let todosE = document.querySelectorAll(".todo");
let totalAmountOfTodos = document.querySelector(".totalAmountOfTodos");

setInterval(() => {
    todosE = document.querySelectorAll(".todo");
    totalAmountOfTodos.innerHTML = `Total Todos: ${todosE.length}`;
}, 10);

function renderTodos(todos, parElSelector) {
    todos.forEach((todo, i) => {
        addTodo(parElSelector, todo, i + 1);
    });
}

function addTodo(perElSelector, title, id) {
    const parEl = doc.querySelector(perElSelector);

    if (title.trim() !== '') {

        const newTodoItem = `
        <li class="todo-item" id="${id}">
        <div class="todo__content">
          <div><span class="todo__number">${id}</span>.</div>
          <input type="checkbox">
          <div class="todo__title">${title}</div>
        </div>
        <button class="delete-button">DEL</button>
        </li>
      `;

        parEl.innerHTML += newTodoItem;

    }
}

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

function selectUser(){
    if(users.style.opacity == "1"){
        users.style.opacity = "0";
    }
    else{
        users.style.opacity = "1";
    }
}

function selectHistory(){
    
    if(history.style.opacity == "1"){
        history.style.opacity = "0";
    }
    else{
        history.style.opacity = "1";
    }
}

function filterFirst(){

}

function deleteE(id){
    todosE[id].remove()
}