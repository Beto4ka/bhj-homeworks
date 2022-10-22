"use strict"

const taskInput = document.getElementById('task__input');
const buttonTaskAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks');
console.log(tasksList)

function delateTask(e) {
    e.preventDefault();
    this.parentElement.remove();
}

function addTask(e) {
    e.preventDefault();
    if (taskInput.value !== '') {
        let task = `
		<div class="task">
			<div class="task__title">
				${taskInput.value}
			</div>
			<a href="#" class="task__remove">&times;</a>
		</div>`
        tasksList.insertAdjacentHTML('beforeEnd', task);
        let removeButtons = Array.from(document.getElementsByClassName('task__remove'));
        removeButtons[removeButtons.length - 1].addEventListener('click', delateTask);
        taskInput.value = '';
    }
}

buttonTaskAdd.addEventListener('click', addTask)