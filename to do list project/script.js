function addTask() {
  const taskInput = document.getElementById('task');
  const timeInput = document.getElementById('reminderTime');
  const taskList = document.getElementById('taskList');
  const alarmSound = document.getElementById('alarmSound');

  const task = taskInput.value.trim();
  const time = new Date(timeInput.value);

  if (!task || isNaN(time.getTime())) {
    alert('Please enter a task and valid reminder time.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${task} — Reminder at ${time.toLocaleTimeString()}`;
  taskList.appendChild(li);

  const delay = time.getTime() - Date.now();
  if (delay > 0) {
    setTimeout(() => {
      alert(`Reminder: ${task}`);
      alarmSound.play();
    }, delay);
  }

  taskInput.value = '';
  timeInput.value = '';
}
