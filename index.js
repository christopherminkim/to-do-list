const addTask = document.querySelector('.task-add');
const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.task-list');
addTask.addEventListener('click', () => {
  const task = document.createElement('li');
  const closeBtn = document.createElement('button');
  closeBtn.append('x');
  closeBtn.addEventListener('click', () => {
    task.remove();
  });
  task.append(taskInput.value);
  task.append(closeBtn);
  taskList.append(task);
});
// mark/check off tasks, and css
