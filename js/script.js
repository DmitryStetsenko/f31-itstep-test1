const doc = document;

let todos = ['TOdo1','TOdo2','TOdo3','TOdo4'];

renderTodos(todos, '#todo-list');

// ----functions---------------

function renderTodos(todos, parElSelector){
    todos.forEach((todo, i) => {
        addTodo(parElSelector, todo, i+1);
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