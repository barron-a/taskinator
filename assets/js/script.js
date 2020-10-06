var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItenEl = document.createElement("li");
    listItenEl.className = "task-item";
    listItenEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItenEl);
}

buttonEl.addEventListener("click", createTaskHandler);