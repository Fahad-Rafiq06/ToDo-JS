var list = document.getElementById("list");


function addtodo(){

    var todoItem = document.getElementById("todo-item");

    var li = document.createElement('li');

    var liText = document.createTextNode(todoItem.value);

    li.appendChild(liText);

    list.appendChild(li);

    todoItem.value = ""
}