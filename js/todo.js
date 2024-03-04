// Function to render the ToDo list
function renderTodos(todos) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodoCompleted(todos, index));

        const todoText = document.createElement('span');
        todoText.textContent = todo.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(todos,index));

        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    });
}

// Function to add a new ToDo
function addTodo(todos) {
    const newTodoInput = document.getElementById('new-todo');
    const newTodoText = newTodoInput.value.trim();

    if (newTodoText) {
        todos.push({ text: newTodoText, completed: false });
        newTodoInput.value = '';
        renderTodos(todos);
    }
}

// Function to toggle the completed status of a ToDo
function toggleTodoCompleted(todos,index) {
    todos[index].completed = !todos[index].completed;
    renderTodos(todos);
}

// Function to delete a ToDo
function deleteTodo(todos,index) {
    todos.splice(index, 1);
    renderTodos(todos);
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderTodos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
    };
}
