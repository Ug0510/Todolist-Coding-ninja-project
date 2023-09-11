// array to store all todos
let todos = [];

// function to render the list
function renderList(){
    if(todos.length != 0)
    {
        let todoList = document.getElementById('todos');
        let listHtml = "";
        for(let todo of todos)
        {
            let checkCompleted = todo.isCompleted? "checked" : "";
            let addedClass = todo.isCompleted? "task-done" : "";
            let li = `<li>
            <span>
                <input type="checkbox" ${checkCompleted} onclick="markCompleted(event)">
                <span class="${addedClass}" >${todo.task}</span>
            </span>
            <input type="button" value="X">
        </li>`;
            
            listHtml += li;
        }
        todoList.innerHTML = listHtml;
    }
}

// function to store todo when enter is pressed in inputbox
function handleKeyPress(event){
    if(event.key === 'Enter')
    {
        let todoInput = document.getElementById('todo-input');
        let newEntry = {
            task: todoInput.value,
            isCompleted: true
        };
        todoInput.value = "";
        todos.push(newEntry);
        renderList();
    }
}
console.log("All working");
