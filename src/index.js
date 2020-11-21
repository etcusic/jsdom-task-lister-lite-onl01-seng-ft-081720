
const list = document.getElementById('tasks')

const taskButton = document.getElementById('task-button')

function makeDatList(taskList) {
    const node = document.createElement("LI")
    const textnode = document.createTextNode(taskList)
    node.appendChild(textnode)
    document.getElementById("tasks").appendChild(node)
}

taskButton.addEventListener("click", function(event) {
    const taskList = document.getElementById("new-task-description").value
    console.log(taskList)
    makeDatList(taskList)
})
