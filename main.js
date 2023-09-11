// array to store all todos
let todos = [];
let filterNum = 0;

// function to render specific list which is passed as parameter
function renderThisList(todosList)
{
    let todoListDOM = document.getElementById('todos');
        let listHtml = "";
        for(let i = 0 ; i < todosList.length; i++)
        {
            let checkCompleted = todosList[i].isCompleted? "checked" : "";
            let addedClass = todosList[i].isCompleted? "task-done" : "";
            let li = `<li>
            <span>
                <input type="checkbox" ${checkCompleted} onclick="toggleTodo(${i})">
                <span class="${addedClass}" >${todosList[i].task}</span>
            </span>
            <input type="button" value="X" onclick="deleteTodo(${i})">
        </li>`;
            
            listHtml += li;
        }
        todoListDOM.innerHTML = listHtml;
}
// function to render the list
function renderList(){
    if(todos.length != 0)
    {
        renderThisList(todos);
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

// filter todos
function filterTodos(num){

    // initializing all buttons as grey
    let btn;
    for(let i = 0; i < 3; i++)
    {
        btn = document.getElementById('btn'+i);
        btn.style.color = 'lightslategrey'
    }
    btn = document.getElementById('btn'+num);
    btn.style.color = 'black';
   
    if(num === 0)
    {
        renderThisList(todos);
    }
    else if(num === 1)
    {
        renderThisList(todos.filter(todo => todo.isCompleted == false));
    }
    else if(num === 2)
    {
        renderThisList(todos.filter(todo => todo.isCompleted == true));
    }

}

// function to delete Todo 
function deleteTodo(index)
{
    todos.splice(index,1);
    renderList();
}


// function to delete all marked Todos
function deleteMarked(){
    let newTodo = [];
    for(let i = 0; i < todos.length; i++)
    {
        if(todos[i].isCompleted == false)
        {
            newTodo.push(todos[i]);
        }
    }
    todos = newTodo;
    renderList();
}
