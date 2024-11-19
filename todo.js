let tasks = [];

function addTask() {
  let taskInput = document.getElementById("todoInput");
  let taskValue = taskInput.value;

  //   checking if input is empty with trim() or not
  if (taskValue.trim() !== "") {
    //addtask
    tasks.push({
      text: taskValue,
      completed: false,
    });
    taskInput.value = "";
    updateTodoList();
  }
}
function updateTodoList() {
  const todoList = document.getElementById("todolist");
  //clear existing list/data
  todoList.innerHTML = "";
  tasks.forEach((task) => {
    let listItem = document.createElement("li");
    listItem.textContent = task.text;
    listItem.className = task.completed ? "completed" : "";
    listItem.onclick = function () {
      toggleCompleted(task);
    };
    todoList.appendChild(listItem);
  });
  //function to calculate todo, completed
  updateAggregrate();
}
function toggleCompleted(task) {
  task.completed = !task.completed;
  updateTodoList();
}
function updateAggregrate() {
  let totalTasks = document.getElementById("totalTasks");
  let completedTasks = document.getElementById("completedTasks");
  let total = tasks.length;
  let completed = tasks.reduce((acc, task) => {
    return task.completed ? acc + 1 : acc;
  }, 0);

  totalTasks.textContent = total;
  completedTasks.textContent = completed;
}
function filterTasks() {
  let searchInput = document.getElementById("searchInput");
  let searchValue = searchInput.value.toLowerCase();
  let filteredTask = tasks.filter((task) => {
    return task.text.toLowerCase().includes(searchValue);
  });
  //update todolist with filterTask

  updateTodoListWithFilteredTasks(filteredTask);
}

function updateTodoListWithFilteredTasks(filteredTasks) {
  let todoList = document.getElementById("todolist");

  todoList.innerHTML = "";
  filteredTasks.forEach((task) => {
    let listItem = document.createElement("li");
    listItem.textContent = task.text;
    listItem.className = task.completed ? "completed" : "";
    listItem.onclick = function () {
      toggleCompleted(task);
    };
    todoList.appendChild(listItem);
  });
  updateAggregrate();
}
