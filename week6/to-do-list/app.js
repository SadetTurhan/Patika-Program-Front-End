document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        savedTasks.forEach(task => {
            if (!taskListDOM.innerHTML.includes(task)) {
                addTask(task);
            }
        });
    }
});
let taskFormDOM = document.querySelector("#taskForm");
taskFormDOM.addEventListener('submit', formHandler);

const toastContainer = document.querySelector('.toast-container');

function formHandler(event) {
    event.preventDefault();
    const TASK_NAME = document.querySelector("#taskname");
    if (TASK_NAME.value) {
        addTask(TASK_NAME.value);
        TASK_NAME.value = "";
        showToast('Task has been added.', 'success');
    } else {
        showToast('Please fill in the input.', 'danger');
    }
}

let taskListDOM = document.querySelector("#taskList");

const addTask = (taskName) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `
        ${taskName}
        <span class="bg-primary rounded-pill">
            <button class="deleteBtn btn btn-danger">Delete Task</button>
        </span>
    `;
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    taskListDOM.append(liDOM);

    saveTaskToLocalStorage(taskName);

    liDOM.addEventListener('click', () => {
        liDOM.classList.toggle('task-done');
    });

    const deleteBtn = liDOM.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        liDOM.remove();
        removeFromLocalStorage(taskName); 
    });
};

function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast bg-${type} text-white`;
    toast.innerHTML = `
        <div class="toast-body">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    toastContainer.appendChild(toast);
    
    const bootstrapToast = new bootstrap.Toast(toast);
    bootstrapToast.show();
}

function saveTaskToLocalStorage(taskName) {
    let tasks = [];
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(taskName);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeFromLocalStorage(taskName) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(task => task !== taskName);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
