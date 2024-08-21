const input = document.querySelector('.input-box');
const button = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');

const addTodo = (e) => {
    if (input.value) {
        e.preventDefault();
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-container');

        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.textContent = input.value;

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-btn')
        completeButton.innerHTML = '<svg class="check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/></svg>'

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn')
        deleteButton.innerHTML = '<svg class="trash" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">< path d = "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" /><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" /></svg >'

        todoDiv.appendChild(todoItem);
        todoDiv.appendChild(deleteButton);
        todoDiv.appendChild(completeButton);
        todoList.appendChild(todoDiv);

        input.value = '';
    } else {
        alert("please enter something")
    }
}

button.addEventListener('click', addTodo);

todoList.addEventListener('click', handleTodo)

function handleTodo(e) {
    const item = e.target;
    if (item.classList[0] == 'delete-btn') {
        item.parentElement.remove();
    }

    if (item.classList[0] == 'complete-btn') {
        const i = item.parentElement
        i.classList.toggle('completed')
    }

}