function addTask() {
  const taskInput = document.querySelector("#taskinput");
  const taskList = document.querySelector(".tasklist");
  const taskItem = taskInput.value;
  if (taskInput) {
    const ListItem = document.createElement("li");
    ListItem.textContent = taskItem;
    taskList.appendChild(ListItem);
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", function () {
      ListItem.remove();
    });
    ListItem.appendChild(delBtn);
  }
}

const taskInputBtn = document.querySelector(".addtask");
taskInputBtn.addEventListener("click", addTask);
