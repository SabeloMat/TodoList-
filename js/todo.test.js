const { renderTodos, addTodo, toggleTodoCompleted, deleteTodo } = require('./todo.js');

// Sample ToDo data
let todos;

beforeEach(() => {
    todos = [
        { text: 'Learn HTML', completed: false },
        { text: 'Learn CSS', completed: true },
        { text: 'Learn JavaScript', completed: false }
    ];
});

test('renders todos correctly', () => {
    const todoList = renderTodos(todos);
    expect(todoList).toMatchSnapshot();
});

test('adds a new todo', () => {
    const newTodoText = 'Write Unit Tests';
    addTodo(todos, newTodoText);
    expect(todos.length).toBe(4);
    expect(todos[3].text).toBe(newTodoText);
    expect(todos[3].completed).toBe(false);
});

test('toggles todo completed status', () => {
    const index = 0;
    toggleTodoCompleted(todos, index);
    expect(todos[index].completed).toBe(true);
});

test('deletes a todo', () => {
    const index = 1;
    deleteTodo(todos, index);
    expect(todos.length).toBe(2);
    expect(todos[1].text).toBe('Learn JavaScript');
});

