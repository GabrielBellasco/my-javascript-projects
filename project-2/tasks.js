var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tasks = JSON.parse(localStorage.getItem('list_tasks')) || [];
function rendertasks() {
    listElement.innerHTML = '';
    for (task of tasks) {
        var taskElement =document.createElement('li');
        var taskText = document.createTextNode(task);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = tasks.indexOf(task);
        linkElement.setAttribute('onclick', 'deletetask('+ pos + ')');

        var linkText = document.createTextNode('Delete');

        linkElement.appendChild(linkText);

        taskElement.appendChild(taskText);
        taskElement.appendChild(linkElement);

        listElement.appendChild(taskElement);

    }
}
rendertasks();
function addtask() {
    var taskText = inputElement.value;
    tasks.push(taskText);
    inputElement.value = '';
    rendertasks();
    saveToStorage();
}
buttonElement.onclick = addtask;
function deletetask(pos) {
    tasks.splice(pos,1);
    rendertasks();
    saveToStorage();
}
function saveToStorage() {
    
    localStorage.setItem('list_tasks', JSON.stringify(tasks));
}