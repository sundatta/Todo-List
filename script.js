const input = document.getElementById("input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");
const error = document.getElementById("error");
const errorClose = document.getElementById("error-close");

function saveData(data){
    let todos = JSON.parse(localStorage.getItem("todo"));

    if(!Array.isArray(todos)){
        todos = [];
    }

    todos.push(data);
    localStorage.setItem("todo", JSON.stringify(todos));
}

errorClose.onclick = () => {
    error.classList.remove("active");
}

function showData(){
    todoList.innerHTML = "";
    let todosData = JSON.parse(localStorage.getItem("todo")) || [];

    if (!Array.isArray(todosData)) {
        todosData = [];
    }

    todosData.forEach(todoData => {
        const todo = document.createElement("div");
        todo.className = "todo";
        const todoText = document.createElement("div");
        todoText.className = "todo-text";
        todoText.innerText = todoData;
        const todoBtn = document.createElement("button");
        todoBtn.className = "todo-btn";
        todoBtn.id = "todo-btn";
        todoBtn.innerText = "🗑️";

        todo.appendChild(todoText);
        todo.appendChild(todoBtn);

        todoList.appendChild(todo);

        todoBtn.onclick = () => {
            localStorage.removeItem("todo");
            todo.remove();
        }
        });
}

addTodoBtn.onclick = () => {
    const inpVal = input.value;
    if(inpVal == ""){
        error.classList.add("active");
        setTimeout(() => {
            error.classList.remove("active");
        }, 5000);
    }else {
    // const todo = document.createElement("div");
    // todo.className = "todo";
    // // const todoText = document.createElement("div");
    // // todoText.className = "todo-text";
    // // todoText.innerText = inpVal;
    saveData(inpVal);
    showData();
    // const todoBtn = document.createElement("button");
    // todoBtn.className = "todo-btn";
    // todoBtn.id = "todo-btn";
    // todoBtn.innerText = "🗑️";

    // // todo.appendChild(todoText);
    // todo.appendChild(todoBtn);

    // todoList.appendChild(todo);

    // todoBtn.onclick = () => {
    //     todo.remove();
    // }

    input.value = "";
}
}

showData();