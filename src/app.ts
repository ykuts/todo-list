class Task {
    id: number;
    title: string;  
    description: string;
    completed: boolean;

    constructor(id: number, title: string, description: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
}

class TaskManager {
    tasks: Task[];

    constructor(){
        this.tasks = [];
    }

    //Adds a task to the task list
    addTask(task: Task): void {
        let newTask = new Task(task.id, task.title, task.description);
        this.tasks.push(newTask);
    }
    
    //Returns a task by its ID
    getTaskById(id: number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    } 
    
    //Marks a task as complete
    markTaskComplete(id: number): void{
        const task = this.getTaskById(id);
        if (task) {
            task.completed = !task.completed;
    }  
}

    //Lists all tasks
    listAllTasks(): void {
        console.log("All Tasks:");
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Completed: ${task.completed ? 'Yes' : 'No'}`);
        });
    }


    //Delete Task
    deleteTask(id:number): void {
        console.log('id=', id)
        const task = this.getTaskById(id);
        this.tasks = this.tasks.filter(task => task.id !== id);        
    }
    
}

const taskManager = new TaskManager();
const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const titleTask = (document.getElementById('inputTitleTask') as HTMLInputElement);
const descriptionTask = (document.getElementById('inputDescTask') as HTMLInputElement);

let ul = document.createElement("ul")
    document.body.appendChild(ul);


function clickAddBtn():void {
    let taskId = randomInt(1, 1000);
    let newTask = new Task(taskId, titleTask.value, descriptionTask.value);
    taskManager.addTask(newTask);
    displayTask(newTask);
    titleTask.value = "";
    descriptionTask.value = "";
}

function displayTask(task: Task): void {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="checkboxChecked(${task.id})" id="checkbox${task.id}" ${task.completed ? "checked" : ""}>  <label>${task.title}</label> <input type="button" onclick="delTask(${task.id})" value="Delete">`
    li.id = `li${task.id}`;
    ul.appendChild(li);
    taskManager.listAllTasks();
}

function delTask(id: number): void{
    taskManager.deleteTask(id);
    document.getElementById(`li${id}`)?.remove();
    taskManager.listAllTasks();
}

function checkboxChecked(id: number): void{
    taskManager.markTaskComplete(id);
    taskManager.listAllTasks();
}




