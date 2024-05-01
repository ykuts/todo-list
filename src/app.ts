class Task {
    id: number;
    title: string;  
    description: string;
    completed: boolean;

    constructor(id: number, title: string, description: string, completed: boolean){
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    //Adds a task to the task list
    addTask(): void {
        let newTask = new Task(this.id, this.title, this.description, this.completed);
        allTasks.push(newTask);
    }
    
    //Returns a task by its ID
    getTaskById(id: number): Task | undefined {
        return new Task(1, 'sd', 'sdsd', true);
    } 
    
    //Marks a task as complete
    markTaskComplete(id: number): void{

    } 

    //Lists all tasks¥
    listAllTasks(): void {

    }
}

class TaskManager {
    task: Task;

    constructor(task: Task){
        this.task = task;
    }

    //Adds a task to the task list
    addTask(task: Task): void {
        let newTask = new Task(task.id, task.title, task.description, task.completed);
        allTasks.push(newTask);
    }
    
    //Returns a task by its ID
    getTaskById(id: number): Task | undefined {
        return new Task(1, 'sd', 'sdsd', true);
    } 
    
    //Marks a task as complete
    markTaskComplete(id: number): void{

    } 

    //Lists all tasks¥
    listAllTasks(): void {

    }
}


const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;


let allTasks: Task[] = [];
console.log('empty task', allTasks);
const titleTask = (document.getElementById('inputTitleTask') as HTMLInputElement);
const descriptionTask = (document.getElementById('inputDescTask') as HTMLInputElement);
const taskList = (document.getElementById('taskList') as HTMLInputElement);

const addBtn = document.getElementById('addBtn');
addBtn?.addEventListener('click', ev => {
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

