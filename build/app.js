"use strict";
class Task {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    //Adds a task to the task list
    addTask() {
        let newTask = new Task(this.id, this.title, this.description, this.completed);
        allTasks.push(newTask);
    }
    //Returns a task by its ID
    getTaskById(id) {
        return new Task(1, 'sd', 'sdsd', true);
    }
    //Marks a task as complete
    markTaskComplete(id) {
    }
    //Lists all tasks¥
    listAllTasks() {
    }
}
class TaskManager {
    constructor(task) {
        this.task = task;
    }
    //Adds a task to the task list
    addTask(task) {
        let newTask = new Task(task.id, task.title, task.description, task.completed);
        allTasks.push(newTask);
    }
    //Returns a task by its ID
    getTaskById(id) {
        return new Task(1, 'sd', 'sdsd', true);
    }
    //Marks a task as complete
    markTaskComplete(id) {
    }
    //Lists all tasks¥
    listAllTasks() {
    }
}
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let allTasks = [];
console.log('empty task', allTasks);
const titleTask = document.getElementById('inputTitleTask');
const descriptionTask = document.getElementById('inputDescTask');
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', ev => {
    let taskId = randomInt(1, 1000);
    let newTask = new Task(taskId, titleTask.value, descriptionTask.value, false);
    newTask.addTask();
    console.log('all tasks', allTasks);
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    li.textContent = newTask.title + " " + newTask.description;
    const delbtn = document.createElement("button");
    delbtn.textContent = 'Delete task';
    taskList.appendChild(checkbox);
    taskList.appendChild(li);
    taskList.appendChild(delbtn);
});
