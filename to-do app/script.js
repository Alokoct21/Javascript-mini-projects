// script.js
document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('addTodo');
    const newTodoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todoList');

    addBtn.addEventListener('click', function () {
        const todoText = newTodoInput.value;
        if (todoText) {
            const newTodoItem = document.createElement('li');
            newTodoItem.textContent = todoText;
            todoList.appendChild(newTodoItem);
            newTodoInput.value = '';
        }
    });
});
