// todo-form
// todo-input
// todo-list
const todoInput = document.querySelector('.todo-input');
	  todoForm = document.querySelector('.todo-form');
	  todoList = document.querySelector('.todo-list');

todoForm.addEventListener('submit', formHandler);
todoList.addEventListener('click', listHandler);

function formHandler(event) {
	event.preventDefault();
	if (todoInput.value) addTodo(todoInput.value);
}

function listHandler(event) {
	if (event.target.classList.contains('delete-item')) {
		deleteTodo(event.target);	
	}
}

function addTodo(value) {
	let deleteIcon = document.createElement('span');
	deleteIcon.classList.add('delete-item');

	let li = document.createElement('li');
	li.classList.add('todo-item');
	li.textContent = value;
	li.dataset.id = Date.now();


	li.append(deleteIcon);
	todoList.append(li);
	todoInput.value = '';
}

function deleteTodo(target) {
	target.closest('.todo-item').remove();
}
// задача 1 обязательная
// сделать чекбокс, при отметке которого текст li будет вычеркнут
// чекбокс слева чтобы отмечать. чекбокс отжат - текст зачеркнут не отжат - не зачеркнут
// listHandler проверяет, что клик пришелся по чекбоксу(с помощью класса этого чекбокса) checked - вычеркнуть
// создавать чекбокс так же как и иконку удаления делали

// задча 2 не обязательно
// иконка редактировать и реализовать это без виртуальных структур данных
// когда нажимают на редактировать, текст из todo-item появляется в инпуте , сам инпут в этот момент должен получать особый статус, что-то, что можно проверить
// когда нажимаем на submit мы можем проверять в каком статусе инпут. либо просто добавляем, либо редактированныйй
// когда происходит submit мы должны найти элемент по id 
