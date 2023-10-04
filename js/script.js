// json-server --watch db.json

const doc = document;

const api = {
    todos: `http://localhost:3000/todos`,
    users: `http://localhost:3000/users`,
    history: `http://localhost:3000/history`,
}

let todos = [];
let usersData = [];
let selectedUserObj = { id: '', name: '' };

getData(api.users)
    .then(data => {
        usersData = data;
        renderUsers('.usersList', usersData);
    })
    .catch(error => {
        console.error('Введіть у консоль: json-server --watch db.json', error);
        alert('Введіть у консоль: json-server --watch db.json');
    });

getData(api.todos)
    .then(data => {
        data.forEach((todo) => {
            const { id, userId, body } = todo;
            if (!todos[userId]) {
                todos[userId] = [];
            }
            todos[userId].push(todo);
        });
        console.log(todos);
        renderTodos(todos, '.todos');
        totalAmountOfTodos.innerHTML = `Total Todos: ${todos.length}`;
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
const selectedUser = document.querySelector('.selectedUser');
const addTodoButton = document.querySelector(".add");
const inputTodo = document.querySelector(".createNewTodo");
const usersList = document.querySelector(".usersList");

addTodoButton.addEventListener("click", () => {
    const newTodo = inputTodo.value.trim();

    if (newTodo !== '') {
        addTodoToDbjson({
            "userId": selectedUserObj['id'],
            "body": newTodo,
            "completed": false
        }).then(data => {
            renderTodo('.todos', newTodo, data.id);
            inputTodo.value = '';
        });
    }
});

usersList.addEventListener("click", (event) => {
    const selectedUserId = event.target.getAttribute("value");
    selectedUserObj = usersData.find(user => user.id === parseInt(selectedUserId));
    if (selectedUserObj) {
        const selectedUserElement = document.querySelector('.selectedUser');
        selectedUserElement.innerHTML = `Selected User: ${selectedUserObj.name}`;
        renderTodos(todos[selectedUserObj.id], '.todos');
    }
    totalAmountOfTodos.innerHTML = `Total Todos: ${todos[selectedUserObj['id']].length}`;
});

// ----functions-----

function renderTodos(todos, parElSelector) {
    const parEl = doc.querySelector(parElSelector);
    parEl.innerHTML = '';
    todos.forEach((todo, i) => {
        renderTodo(parElSelector, todo, i + 1);
    });
}

function renderTodo(parElSelector, todo, id) {
    const parEl = doc.querySelector(parElSelector);
    const title = todo['body'];

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

function renderUsers(parElSelector, users) {
    const parEl = document.querySelector(parElSelector);

    parEl.innerHTML = users.map(user => {
        const { id, name } = user;
        return `<div value="${id}">${name}</div>`
    }).join('');
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

async function deleteE(id) {
    const userId = selectedUserObj.id;
    const todoIndex = todos[userId].findIndex(todo => todo.id === id);

    if (todoIndex !== -1) {
        todos[userId].splice(todoIndex, 1);
        const todoItem = document.querySelector(`#todo${id}`);
        if (todoItem) {
            todoItem.remove();
        }
        totalAmountOfTodos.innerHTML = `Total Todos: ${todos[userId].length}`;
        await deleteTodoFromDbJson(id);
    }
}


async function deleteTodoFromDbJson(todoId) {
    const url = `http://localhost:3000/todos/${todoId}`;

    try {
        await fetch(url, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error(error);
        return false;
    }
}