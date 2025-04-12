// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement('li');

  // Create span for task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Create Edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';
  editBtn.onclick = () => {
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      taskSpan.textContent = newTask.trim();
    }
  };

  // Create Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => li.remove();

  // Append all to the list item
  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Add list item to the list
  document.getElementById('taskList').appendChild(li);

  // Clear input
  taskInput.value = "";
}
