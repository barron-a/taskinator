var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var listItenEl = document.createElement("li");
    listItenEl.className = "task-item";
    listItenEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItenEl);
    console.log(event);
}

formEl.addEventListener("submit", createTaskHandler);