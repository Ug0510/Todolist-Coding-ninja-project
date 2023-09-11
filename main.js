// array to store all todos
let todos = [];

// function to render the list
function renderList(){
    if(todos.length != 0)
    {
        let todoList = document.getElementById('todos');
        let listHtml = "";
        for(let i = 0 ; i < todos.length; i++)
        {
            let checkCompleted = todos[i].isCompleted? "checked" : "";
            let addedClass = todos[i].isCompleted? "task-done" : "";
            let li = `<li>
            <span>
                <input type="checkbox" ${checkCompleted} onclick="toggleTodo('${i}')">
                <span class="${addedClass}" >${todos[i].task}</span>
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
            isCompleted: false
        };
        todoInput.value = "";
        todos.push(newEntry);
        renderList();
    }
}

// toggle Task completion
function toggleTodo(index)
{
    if(index >= 0 && index < todos.length)
    {
        todos[index].isCompleted = !todos[index].isCompleted;
        renderList();
    }
}

// function to toggle all todos 
function markAll()
{
    for(let i = 0; i < todos.length; i++)
    {
        todos[i].isCompleted = true;
    }
    renderList();
}