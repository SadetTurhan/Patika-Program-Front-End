let taskFormDOM = document.querySelector("#taskForm");
taskFormDOM.addEventListener('submit',formHandler)

function formHandler(event){
    event.preventDefault()
    const TASK_NAME = document.querySelector("#taskname")
    if(TASK_NAME.value){
        addTask(TASK_NAME.value)
        TASK_NAME.value = ""
    }else{
        console.log("hatalı giriş")
    }
}

let taskListDOM = document.querySelector("#taskList")

const addTask = (taskName) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = ` ${taskName}
    <span class="bg-primary rounded-pill">
    `
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    taskListDOM.append(liDOM)
}