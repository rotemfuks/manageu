


////////אפשר להוסיף טבלה של משימות שבוצעו בהצלחה 
///////אפשר לשמור את זה בלוקאל סטורג 

class Task {
    id:any;
   
    completed:any;
  constructor(private description:any) {
    this.id = Math.floor(Math.random() * 1001);
    this.description = description;
    this.completed = false;
  }
}

let task1 = new Task("HW");
console.log(task1);

class TaskManager {
    public tasks:any
  constructor() {
    this.tasks = [];
  }
  addTask(description:any) {
    this.tasks.push(new Task(description));
  }

  deleteTask(id:any) {
    let indexToDelete = this.tasks.findIndex((task:any) => task.id == id);
    this.tasks.splice(indexToDelete, 1);
  }

  updateTaskDescription(id:any, newDescription:any) {
    let indexToUpdate = this.tasks.findIndex((task:any) => task.id == id);
    this.tasks[indexToUpdate].description = newDescription;
  }

  completeTask(id:any) {
    let indexToUpdate = this.tasks.findIndex((task:any) => task.id == id);
    this.tasks[indexToUpdate].completed = true;
  }
}

let manager = new TaskManager();
manager.addTask("Dishes");
manager.addTask("Home work");
console.log(manager.tasks);

function showTasksInLists() {
  document.getElementById("active")!.innerHTML = "";
  document.getElementById("completed")!.innerHTML = "";
  for (let task of manager.tasks) {
    if (task.completed == false) {
      document.getElementById("active")!.innerHTML += `
        <div> <li class="list-group-item d-inline-block w-50">${task.description}</li> <span> <button class="btn btn-success" onclick="completeTask(${task.id})"><i class="fa-solid fa-check"></i></button> <button class="btn btn-primary" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn btn-danger" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div> `;
    } else {
      document.getElementById("completed")!.innerHTML += `
        <div> <li class="list-group-item d-inline-block w-50 text-decoration-line-through">${task.description}</li> <span> <button class="btn btn-success" disabled><i class="fa-solid fa-check-double"></i></button> <button class="btn btn-primary" disabled><i class="fa-solid fa-pen"> </i> </button> <button class="btn btn-danger" disabled ><i class="fa-solid fa-trash"></i> </button> </span> </div>`;
    }
  }
}

showTasksInLists();

function completeTask(id:any) {
  manager.completeTask(id);
  showTasksInLists();
}

function updateDescription(id:any) {
  let newDescription = prompt("Enter new description:");
  if (newDescription != null || newDescription != "") {
    manager.updateTaskDescription(id, newDescription);
    showTasksInLists();
  } else {
    alert("Sorry! something went wrong");
  }
}

function deleteTask(id:any) {

  if (confirm("Are you sure?")) {
    manager.deleteTask(id);
    showTasksInLists();
  }
}

function addNewTask() {
alert("lolo")
  let description:any = document.getElementById("description");
  if(description.value){
  manager.addTask(description);
  description.value = "";
  showTasksInLists();

  }

}