'use strict';

let headInput = document.querySelector(".header-input"),
	headAddBtn  = document.querySelector("#add"),
	ulToDo = document.querySelector("#todo"),
	ulToDoCompleted = document.querySelector(".todo-completed");

function createToDo (getLocStorInfo){
	getLocStorInfo = localStorage.getItem('todoItem');

	const planLi = document.createElement('li');
	planLi.className = 'todo-item';
	planLi.innerHTML = `${getLocStorInfo}
						<div class="todo-buttons">
						<button class="todo-remove"></button>
						<button class="todo-complete"></button>
						</div>`;
	return planLi;
}

document.addEventListener('click', (event) => {
	event.preventDefault();
	let target = event.target;

    if(target.classList.contains('todo-remove')) {
        target.offsetParent.parentNode.remove();
	}

	if(target.classList.contains('todo-complete')) {
		ulToDoCompleted.appendChild(target.offsetParent.parentNode);
	}

	headAddBtn.addEventListener('click', () => {
		localStorage.setItem('todoItem', headInput.value);
		if(headInput.value !== '') {
			ulToDo.appendChild(createToDo());
		}
		headInput.value = '';
		return;
	});
});