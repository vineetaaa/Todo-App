// Date
var date = document.getElementById("date")
var rightNow = new Date();
var theDay = rightNow.getDate();
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
var theMonth = rightNow.getMonth();
var month = monthNames[theMonth];
var theYear = rightNow.getFullYear();
var theHour = rightNow.getHours()
var theMinutes = rightNow.getMinutes()

var pDate = document.createElement('p')
var fullDate = document.createTextNode(theDay + " " + month + " " + theYear + ", " + theHour + ":" + theMinutes)
pDate.appendChild(fullDate)
date.appendChild(pDate)

// Todo
var list = document.getElementById("list")

function addTodo(){
    var todoItem = document.getElementById("todo_item")

    // Create li element
    var li = document.createElement("li")
    var liText = document.createTextNode(todoItem.value)
    li.setAttribute("class", "item")
    li.appendChild(liText)

    // create edit button
    var editBtn = document.createElement("button")
    var editBtnText = document.createTextNode("Edit")
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editBtnText)

    li.appendChild(editBtn)

    // create delete button
    var delBtn = document.createElement("button")
    var delBtnText = document.createTextNode("Delete")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delBtnText)

    li.appendChild(delBtn)
    

    if (todoItem.value === '') {
        alert("You must write something!");
    } else {
        list.appendChild(li)
    }
    todoItem.value = ""
}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Edit Todo ", val)
    if(editValue==''){
        val=e.parentNode.firstChild.nodeValue
    }
    else{
        e.parentNode.firstChild.nodeValue = editValue
    }
}

function deleteAll(){
    list.innerHTML = ""
}
