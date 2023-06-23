
////////אפשר להוסיף טבלה של משימות שבוצעו בהצלחה 
///להוסיף שעון שמצביע על השאלה

var Task = /** @class */ (function () {
    function Task(description,date,level) {
        this.description = description;
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.completed = false;
        this.date=date;
        this.level=level
    }
    return Task;
}());
var task1 = new Task("HW");
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (description,date,level) {
        this.tasks.push(new Task(description,date,level));
    };
    TaskManager.prototype.deleteTask = function (id) {
        var indexToDelete = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks.splice(indexToDelete, 1);
    };
    TaskManager.prototype.updateTaskDescription = function (id, newDescription) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].description = newDescription;
    };
    TaskManager.prototype.completeTask = function (id) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].completed = true;
    };
    return TaskManager;
}());
var manager = new TaskManager();
manager.addTask("Dishes","2023/06/04","low");
manager.addTask("Home work","2023/07/01","high");

function showTasksInLists() {
    document.getElementById("active").innerHTML = "";
    document.getElementById("completed").innerHTML = "";
    for (var _i = 0, _a = manager.tasks; _i < _a.length; _i++) {
        var task = _a[_i];
        if (task.completed == false) {


            document.getElementById("active").innerHTML += `<div  class="levels-to-display">level of urgency :${task.level}</div>` +`<span class="number">${_i+1+"."}</span> ` +`<span class="date">${task.date}</span> `+ "\n       <div > <li class=\"list-group-item d-inline-block w-50\">".concat(task.description, "</li> <span> <button class=\"btn btn-success\" onclick=\"completeTask(").concat(task.id, ")\"><i class=\"fa-solid fa-check\"></i></button> <button class=\"btn btn-primary\" onclick=\"updateDescription(").concat(task.id, ")\"><i class=\"fa-solid fa-pen\"></i></button> <button class=\"btn btn-danger\" onclick=\"deleteTask(").concat(task.id, ")\"><i class=\"fa-solid fa-trash\"></i></button></span> </div> ");
        }
        else {
            document.getElementById("completed").innerHTML += "\n        <div> <li class=\"list-group-item d-inline-block w-50 text-decoration-line-through\">".concat(task.description, "</li> <span> <button class=\"btn btn-success\" disabled><i class=\"fa-solid fa-check-double\"></i></button> <button class=\"btn btn-primary\" disabled><i class=\"fa-solid fa-pen\"> </i> </button> <button class=\"btn btn-danger\" disabled ><i class=\"fa-solid fa-trash\"></i> </button> </span> </div>");
        }
    }
}
showTasksInLists();
function completeTask(id) {
    manager.completeTask(id);
    showTasksInLists();
}
function updateDescription(id) {
    var newDescription = prompt("Enter new description:");
    if (newDescription != null || newDescription != "") {
        manager.updateTaskDescription(id, newDescription);
        showTasksInLists();
    }
    else {
        alert("Sorry! something went wrong");
    }
}
function deleteTask(id) {
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        showTasksInLists();
    }
}
// function covertDate(date){
//    // Split the inputDate into year, month, and day
// const [year, month, day] = date.split("-");

// // Rearrange the components in the desired format: day/month/year
// const formattedDate = `${day}/${month}/${year}`;

// console.log(formattedDate); // Output: 03/08/2023 
// return formattedDate
// }
function addNewTask() {
    
    var description = document.getElementById("description");
   var date = document.getElementById("input-date");
   var levels = document.getElementById("levels");
  //  date=covertDate(date.value)


  
    if(description.value==""){
        alert("you nust enter description")
        return
    }
    if(date.value==""){
        alert("you must enter date")
        return
    }
    if(levels.value==""){
        alert("you must enter level of urgency")
        return
    }


    

        manager.addTask(description.value,date.value,levels.value);
        description.value = "";
        showTasksInLists();
    
}



function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


///////local storge
///////אם אני רוצה לשמור משהו בלוקאל סטורג
////key שיער
////value הצבע של השיער
