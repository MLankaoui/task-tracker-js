function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.className = 'bg-white border border-gray-300 p-4 my-2 flex justify-between';
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)" class="bg-red-500 text-white py-1 px-2 rounded">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const li = button.parentElement;
    const taskList = document.getElementById('taskList');
    taskList.removeChild(li);
}