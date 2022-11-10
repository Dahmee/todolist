"üse strict";
// alert("I am working");
function onClickEventHandler() {
  console.log("this is my function");
}
function onEditTodo() {
  alert("I am editing");
}

function addListenersToDeleteButtons() {
  const buttonCollection = document.querySelectorAll(".delete");
  console.log(buttonCollection);
  const lastButton = buttonCollection[buttonCollection.length - 1];
  console.log(lastButton);
  lastButton.addEventListener("click", deleteTodo);
}
function showTodo(todo) {
  const todoListWrapper = document.getElementById("todo-list");
  const todoListItem = document.createElement("li");
  todoListItem.classList.add("todo-item");

  todoListItem.innerHTML = `<div>
    <input class="todo-checkbox" type="checkbox" /><span
      class="todo-textcontent"
      >${todo}</span
    >
    <div class="action-wrapper">
      <button id="edit-btn" class="todo-action edit">Edit</button>
      <button class="todo-action delete">Delete</button>
      
    </div>
  </div>`;
  todoListWrapper.appendChild(todoListItem);
  addListenersToDeleteButtons();
}

function onTodoFormSubmit(event) {
  event.preventDefault();
  const todoInput = document.getElementById("todo-input");
  const todoValue = todoInput.value;

  //   console.log(todoValue, "this is the value");
  showTodo(todoValue);
}
function setup() {
  const editButton = document.getElementById("edit-btn");

  const form = document.getElementById("form");
  form.addEventListener("submit", onTodoFormSubmit);
  // editButton.addEventListener("click", onEditTodo);
}

setup();
