// todo.js

// Sample ToDo data
let todos = [
    { text: 'Learn HTML', completed: false },
    { text: 'Learn CSS', completed: true },
    { text: 'Learn JavaScript', completed: false }
];


// Function to add a new ToDo
function addTodo(todoList, text) {

    todoList.push({ text: text, completed: false });
       
}

// Function to toggle the completed status of a ToDo
function toggleTodoCompleted(todoList,index) {
    todoList[index].completed = !todoList[index].completed;
}

// Function to delete a ToDo
function deleteTodo(todoList,index) {
    todoList.splice(index, 1);
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        todos,
    };
}
