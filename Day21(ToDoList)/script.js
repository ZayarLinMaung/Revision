function addTask() {
  const taskInput = document.querySelector("#taskinput");
  const taskList = document.querySelector(".tasklist");
  const taskText = taskInput.value.trim();
  if (taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.addEventListener("click", function () {
      listItem.remove();
    });
    taskList.appendChild(listItem);
    listItem.appendChild(delButton);
  }
}
const addTaskBtn = document.querySelector(".addtask");
addTaskBtn.addEventListener("click", addTask);
