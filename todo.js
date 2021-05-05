if (JSON.parse(localStorage.getItem("todolist")) == null) {
    var count = 1;
}
else {
    var count = JSON.parse(localStorage.getItem("todolist")).length;
}
var task, desc;
function submit() {
    console.log("Updating list...");

    task = document.getElementById("taskName").value;
    desc = document.getElementById("taskDesc").value;

    console.log(task);
    console.log(desc);
    if (task.length > 0) {
        if (localStorage.getItem('todolist') == null || localStorage.getItem('todolist') == undefined) {
            var itemJsonArray = [];
            itemJsonArray.push([count, task, desc]);
            localStorage.setItem('todolist', JSON.stringify(itemJsonArray));
        }
        else {
            itemJsonArray = JSON.parse(localStorage.getItem('todolist'));
            itemJsonArray.push([count, task, desc]);
            localStorage.setItem('todolist', JSON.stringify(itemJsonArray));
        }
    }
    else {
        alert("Cannot keep Title Empty!");
    }
}

//Populating the table
function viewTable() {
    lc = JSON.parse(localStorage.getItem("todolist"));
    vstr = ""
    for (var i in lc) {
        vstr += `
        <tr>
        <th scope="row">${parseInt(i) + 1}</th>
        <td>${lc[i][1]}</td>
        <td>${lc[i][2]}</td>
        <td>
        <div class="dropdown" id="op${count}">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Select Action
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onclick="markAsDone()"><a class="dropdown-item" href="#">Mark As Done</a></li>
            <li onclick="deleteEntry()"><a class="dropdown-item" href="#">Delete</a></li>
        </ul>
        </div>
        </td>
        </tr>`
    }
    var ventry = document.getElementById("taskTable");
    ventry.innerHTML = vstr;
}
function addToTable() {
    lc = JSON.parse(localStorage.getItem("todolist"));
    var entry = document.getElementById("taskTable");
    str = `
    <tr>
    <th scope="row">${count}</th>
    <td>${task}</td>
    <td>${desc}</td>
    <td>
    <div class="dropdown" id="op${count}">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ...
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li onclick="markAsDone()"><a class="dropdown-item" href="#">Mark As Done</a></li>
    <li onclick="deleteEntry()"><a class="dropdown-item" href="#">Delete</a></li>
  </ul>
</div>
    </td>
    </tr>`
    if (task.length > 0) {
        var createTask = document.createElement('tr');
        createTask.innerHTML = str;
        entry.appendChild(createTask);
        count++;
    }
    // else{
    //     alert("Cannot keep task title empty!");
    // }
}
function deleteEntry() {

}
function markasdone() {

}
submitbtn.addEventListener("click", submit);
submitbtn.addEventListener("click", addToTable);
showTasks.addEventListener("click", viewTable);

