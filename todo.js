var count = 1;
itemJsonArray = [];
var task, desc;
function submit() {
    console.log("Updating list...");

     task = document.getElementById("taskName").value;
     desc = document.getElementById("taskDesc").value;

    console.log(task);
    console.log(desc);
    if(JSON.stringify(task).length > 0){
        if (localStorage.getItem('todolist') == null || localStorage.getItem('todolist') == undefined) {
            itemJsonArray = [];
            itemJsonArray.push([count, task, desc]);
            localStorage.setItem('todolist', JSON.stringify(itemJsonArray));
        }
        else{
            itemJsonArray = JSON.parse(localStorage.getItem('todolist'));
            itemJsonArray.push([task, desc]);
            localStorage.setItem('todolist', JSON.stringify(itemJsonArray));
        }
    }
    else
    {
        alert("Cannot keep Title Empty!");
    }
}

//Populating the table

function addToTable() {
    lc = JSON.parse(localStorage.getItem("todolist"));
    var entry = document.getElementById("taskTable");
    str = `
    <tr>
    <th scope="row">${count}</th>
    <td>${task}</td>
    <td>${desc}</td>
    <td>
    <button class="btn btn-sm btn-primary" id="mad${count}">Mark as done</button>
    </td>
    </tr>`
    if (task.length > 0){
        var createTask = document.createElement('tr');
        createTask.innerHTML = str;
        entry.appendChild(createTask);
        count++;
    }
    else{
        alert("Cannot keep task title empty!");
    }
}

submitbtn.addEventListener("click", submit);
submitbtn.addEventListener("click", addToTable);

function removefromTable(){

}
