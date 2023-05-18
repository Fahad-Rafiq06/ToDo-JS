var list = document.getElementById("list");


function addtodo(){

    var todoItem = document.getElementById("todo-item");

    // created list element
    var li = document.createElement('li');

    var liText = document.createTextNode(todoItem.value);
    
    li.appendChild(liText);

    // created delete button
    var dltBtn = document.createElement('button');
    
    var dltText = document.createTextNode("Delete");

    dltBtn.appendChild(dltText);

    dltBtn.setAttribute('onclick', 'deleteitem(this)')

    li.appendChild(dltBtn)

    // create Edit Button
    var editBtn = document.createElement("button");

    var editText = document.createTextNode("Edit");

    editBtn.appendChild(editText);

    editBtn.setAttribute('onclick', 'edititem(this)')

    li.appendChild(editBtn)

    list.appendChild(li);

    todoItem.value = ""
}

function deleteitem(e){
    e.parentNode.remove();
}

function edititem(e){
    var edit = prompt("Enter the updated text", e.parentNode.firstChild.nodeValue)
    
    e.parentNode.firstChild.nodeValue = edit;
    // console.log(e.parentNode.firstChild.nodeValue)
}

function dltall(){
    list.innerHTML = ""
}
