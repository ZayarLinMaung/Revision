function addTask() {
  const taskInput = document.querySelector("#taskinput");
  const taskList = document.querySelector(".tasklist");
  const taskData = taskInput.value.trim();
  if (taskInput) {
    const listItem = document.createElement("li");
    listItem.textContent = taskData;
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", function () {
      listItem.remove();
    });
    taskList.appendChild(listItem);
    listItem.appendChild(delBtn);
  }
}

const addTaskBtn = document.querySelector(".addtask");
addTaskBtn.addEventListener("click", addTask);
