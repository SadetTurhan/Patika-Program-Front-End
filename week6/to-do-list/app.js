let taskFormDOM = document.querySelector("#taskForm");
taskFormDOM.addEventListener('submit',formHandler)

const alertDOM = document.querySelector("#alert")
const ALERT = `
<div class="alert alert-warning alert-dismissible fade show ml-3" role="alert">
  <strong>houston we have a problem!</strong> Please fill in the input.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
` 
const SUCCESSALERT = `
<div class="alert alert-success alert-dismissible fade show" role="alert">
    Task has been added.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
function formHandler(event){
    event.preventDefault()
    const TASK_NAME = document.querySelector("#taskname")
    if(TASK_NAME.value){
        addTask(TASK_NAME.value)
        TASK_NAME.value = ""
        alertDOM.innerHTML = SUCCESSALERT;
    }else{
        alertDOM.innerHTML = ALERT;
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