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
    });



// ----Code----
const users = document.querySelector(".users");
const history = document.querySelector(".history");
const todosE = document.querySelectorAll(".todo");
const todosList = document.querySelector(".todos");
const totalAmountOfTodos = document.querySelector(".totalAmountOfTodos");
const searchTodo = document.querySelector(".SearchTodo");
const todoTitle = document.querySelectorAll(".todoTitle");

todosList.onchange = () => {
    // todosE = document.querySelectorAll(".todo");
    totalAmountOfTodos.innerHTML = `Total Todos: ${todos.length}`;
};


// ----functions-----

function renderTodos(todos, parElSelector) {
    todos.forEach((todo, i) => {
        addTodo(parElSelector, todo, i + 1);
    });
}

function addTodo(perElSelector, title, id) {
    const parEl = doc.querySelector(perElSelector);

    if (title.trim() !== '') {

        const newTodoItem = `
        <li class="todo" id="todo${id}" style="margin: 0 0 2% 0;">
          <div class="todoContent">
            <div class="todoNumber">${id}.</div>
            <input class="todoCheckbox${id}" type="checkbox">
            <div class="todoTitle">${title}</div>
          </div>
          <button type="button" class="btn-delete" onclick="deleteE(0)" label="delete button">DEL</button>
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