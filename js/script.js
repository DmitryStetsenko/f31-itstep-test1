const doc = document;


function addTodo() {
    const newTodoTitle = doc.getElementById('newTodoTitle').value;

    if (newTodoTitle.trim() !== '') {
      
      const newTodoItem = doc.createElement('li');
      newTodoItem.className = 'todo';
      newTodoItem.innerHTML = `
        <div class="todo__content">
          <div><span class="todo__number">1</span>.</div>
          <input type="checkbox">
          <div class="todo__title">${newTodoTitle}</div>
        </div>
        <button class="btn-delete">DEL</button>
      `;
      
      const todoList = doc.getElementById('todo-list');
      todoList.appendChild(newTodoItem);
  
      
      doc.getElementById('newTodoTitle').value = '';
  
      
    } else {
      
      alert('Please enter a valid todo.');
    }
  }
  
