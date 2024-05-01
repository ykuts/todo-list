"use strict";
class Task {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    //Adds a task to the task list
    addTask(task) {
        let newTask = new Task(task.id, task.title, task.description);
        this.tasks.push(newTask);
    }
    //Returns a task by its ID
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
    //Marks a task as complete
    markTaskComplete(id) {
        const task = this.getTaskById(id);
        if (task) {
            task.completed = !task.completed;
        }
    }
    //Lists all tasks
    listAllTasks() {
        console.log("All Tasks:");
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Completed: ${task.completed ? 'Yes' : 'No'}`);
        });
    }
    //Delete Task
    deleteTask(id) {
        console.log('id=', id);
        const task = this.getTaskById(id);
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
const taskManager = new TaskManager();
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const titleTask = document.getElementById('inputTitleTask');
const descriptionTask = document.getElementById('inputDescTask');
let ul = document.createElement("ul");
document.body.appendChild(ul);
function clickAddBtn() {
    let taskId = randomInt(1, 1000);
    let newTask = new Task(taskId, titleTask.value, descriptionTask.value);
    taskManager.addTask(newTask);
    displayTask(newTask);
    titleTask.value = "";
    descriptionTask.value = "";
}
function displayTask(task) {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="checkboxChecked(${task.id})" id="checkbox${task.id}" ${task.completed ? "checked" : ""}>  <label>${task.title}</label> <input type="button" onclick="delTask(${task.id})" value="Delete">`;
    li.id = `li${task.id}`;
    ul.appendChild(li);
    taskManager.listAllTasks();
}
function delTask(id) {
    var _a;
    taskManager.deleteTask(id);
    (_a = document.getElementById(`li${id}`)) === null || _a === void 0 ? void 0 : _a.remove();
    taskManager.listAllTasks();
}
function checkboxChecked(id) {
    taskManager.markTaskComplete(id);
    taskManager.listAllTasks();
}
