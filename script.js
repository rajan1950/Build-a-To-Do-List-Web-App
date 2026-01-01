const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const listItem = document.createElement('li');
  listItem.classList.add('task-item');

  listItem.innerHTML = `
    <span>${taskText}</span>
    <div class="task-actions">
      <button class="complete">&#10003;</button>
      <button class="delete">&#10005;</button>
    </div>
  `;

  taskList.appendChild(listItem);
  taskInput.value = '';

  // Mark complete
  listItem.querySelector('.complete').addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  // Delete task
  listItem.querySelector('.delete').addEventListener('click', () => {
    taskList.removeChild(listItem);
  });
});
