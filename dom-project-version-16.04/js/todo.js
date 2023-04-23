// todo-form
// todo-input
// todo-list
const todoInput = document.querySelector('.todo-input');
	  todoForm = document.querySelector('.todo-form');
	  todoList = document.querySelector('.todo-list');

todoForm.addEventListener('submit', formHandler);
todoList.addEventListener('click', listHandler);

let todosArr = [];
let itemId;


function formHandler(event) {
	event.preventDefault();
	if ((todoInput.value) && (!todoInput.classList.contains('edit-input'))) {
		addTodo(todoInput.value) 
	} else if ((todoInput.value) && (todoInput.classList.contains('edit-input'))) {
		submitEdit(todoInput.value, itemId);
	}
}

function listHandler(event) { 

	if (event.target.classList.contains('delete-item')) {
		deleteTodo(event.target);	
	} else if (event.target.classList.contains('checkbox')) {
		checkHandler(event.target);
	} else if (event.target.classList.contains('edit-item')) {
		todoInput.classList.add('edit-input');
		editTodo(event.target);
	}
}

function addTodo(value) {
	let deleteIcon = document.createElement('span');
	deleteIcon.classList.add('delete-item');

	let checkboxDone = document.createElement('input');
	checkboxDone.type = "checkbox";
	checkboxDone.classList.add('form-check-input');
	checkboxDone.classList.add('checkbox');
	checkboxDone.setAttribute('id', 'text');


	let editIcon = document.createElement('span');
	editIcon.classList.add('edit-item');

	let text = document.createElement('label');
	text.classList.add('todo-text');
	text.setAttribute('for', 'text');
	text.textContent = value;

	let li = document.createElement('li');
	li.classList.add('todo-item');
	li.dataset.id = Date.now();
	todosArr.push(li);

	li.append(deleteIcon);
	li.appendChild(checkboxDone); 
	li.appendChild(editIcon);
	li.appendChild(text);
	todoList.append(li);
	todoInput.value = '';
}
 
function deleteTodo(target) {
	target.closest('.todo-item').remove();
}

function checkHandler(target) {
	if (target.checked) {
		target.closest('.todo-item').classList.add('done');
	} else if (!target.checked) {
		target.closest('.todo-item').classList.remove('done');
	}
}

function editTodo(target) {
	itemId = target.closest('.todo-item').dataset.id;
	todoInput.value = target.closest('.todo-item').textContent;
}

function submitEdit(value, itemId) {

	for (let i = 0; i < todosArr.length; i++) {
		if (todosArr[i].dataset.id === itemId) {
			let label = todosArr[i].querySelector('label');
			label.textContent = value;
		}
	} 

	todoInput.classList.remove('edit-input');
	todoInput.value = '';
}


// задача 1 обязательная
// сделать чекбокс, при отметке которого текст li будет вычеркнут
// чекбокс слева чтобы отмечать. чекбокс отжат - текст зачеркнут не отжат - не зачеркнут
// listHandler проверяет, что клик пришелся по чекбоксу(с помощью класса этого чекбокса) checked - вычеркнуть
// создавать чекбокс так же как и иконку удаления делали

// задча 2 не обязательно
// иконка редактировать и реализовать это без виртуальных структур данных
// когда нажимают на редактировать, текст из todo-item появляется в инпуте , сам инпут в этот момент должен получать особый статус,
 // что-то, что можно проверить
// когда нажимаем на submit мы можем проверять в каком статусе инпут. либо просто добавляем, либо редактированныйй
// когда происходит submit мы должны найти элемент по id 
