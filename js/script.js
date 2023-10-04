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
        totalAmountOfTodos.innerHTML = `Total Todos: ${todos.length}`;

        console.log(todos);
    })
    .catch(error => {
        console.error('Введіть у консоль: json-server --watch db.json', error);
        alert('Введіть у консоль: json-server --watch db.json');
    });



// ----Code----
const users = document.querySelector(".users");
const history = document.querySelector(".history");
const todosE = document.querySelectorAll(".todo");
const todosList = document.querySelector(".todos");
const totalAmountOfTodos = document.querySelector(".totalAmountOfTodos");
const searchTodo = document.querySelector(".SearchTodo");
const todoTitle = document.querySelectorAll(".todoTitle");
const addTodoButton = document.querySelector(".add");
const inputTodo = document.querySelector(".createNewTodo");

todosList.onchange = () => {
    // todosE = document.querySelectorAll(".todo");
    totalAmountOfTodos.innerHTML = `Total Todos: ${todos.length}`;
};


// ----functions-----

addTodoButton.addEventListener("click", () => {
    const newTodo = inputTodo.value.trim();

    if (newTodo !== '') {
        addTodoToDbjson({
            "userId": 1,
            "body": newTodo,
            "completed": false
        }).then(data => {
            addTodo('.todos', newTodo, data.id);
            inputTodo.value = '';
        });
    }
});

function renderTodos(todos, parElSelector) {
    todos.forEach((todo, i) => {
        addTodo(parElSelector, todo, i + 1);
    });
}

function addTodo(parElSelector, title, id) {
    const parEl = doc.querySelector(parElSelector);

    if (title.trim() !== '') {
        const newTodoItem = `
            <li class="todo" id="todo${id}" style="margin: 0 0 2% 0;">
              <div class="todoContent">
                <div class="todoNumber">${id}.</div>
                <input class="todoCheckbox${id}" type="checkbox">
                <div class="todoTitle">${title}</div>
              </div>
              <button type="button" class="btn-delete" onclick="deleteE(${id})" label="delete button">DEL</button>
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

async function addTodoToDbjson(todoObj) {
    const res = await fetch(api.todos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoObj)
    });
    const data = await res.json();
    return data;
}

function selectUser() {
    if (users.style.opacity == "1") {
        users.style.opacity = "0";
    }
    else {
        users.style.opacity = "1";
    }
}

function selectHistory() {

    if (history.style.opacity == "1") {
        history.style.opacity = "0";
    }
    else {
        history.style.opacity = "1";
    }
}

function search() {
    let InnerHTMLArray = getInnerHTMLArray(todoTitle);
    console.log(searchQueries(searchTodo.value, InnerHTMLArray))
}

function filterFirst() {

}

function deleteE(id) {
    todosE[id].remove()
}