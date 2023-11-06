const addTask = document.querySelector('.task-add');
const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.task-list');
addTask.addEventListener('click', () => {
  const task = document.createElement('li');
  task.append(taskInput.value);
  taskList.append(task);
});
// add function to get rid of tasks, mark/check off tasks, and css