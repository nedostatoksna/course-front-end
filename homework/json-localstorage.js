	// 1)

	// Преобразуйте user в JSON и сохраните (выведите в console.log), 
	// затем прочитайте JSON и сохраните в другую переменную (выведите в console.log)

	let user = {
	  name: "Василий Иванович",
	  age: 35
	};

let userJSON = JSON.stringify(user);
console.log(userJSON);
let parsedUser = JSON.parse(userJSON);
console.log(parsedUser);

// 2) 
	
// 	напишем счетчик на localStorage - + / -
//         пусть в компоненте будет сам счетчик 
//         и будут кнопки имитирующие интерфейс localStorage (функция к каждой кнопке)
//         Все кнопки должны выводить в консоль сообщения. _Например
// 	setItem будет выводить в консоль что произошло сохранение и что именно сохранено._
	
//         setItem(key, value) – сохранить пару ключ/значение.
//         getItem(key) – получить данные по ключу key.
//         removeItem(key) – удалить данные с ключом key.
//         clear() – удалить всё.
//         key(index) – получить ключ на заданной позиции.
//         length – количество элементов в хранилище.
	
const counter = document.querySelector('.counter'),
	  plus = document.querySelector('.plus'),
	  minus = document.querySelector('.minus');

counter.addEventListener('input', counterHandler);
plus.addEventListener('click', () => setNumber(Number(counter.value) + 1));
minus.addEventListener('click', () => setNumber(Number(counter.value) - 1));

let counterState = {
	number: 0
}

function counterHandler(event) {
	setNumber(clearInput());
}

function setCounterState(nextStateCounter) {
	renderCounter(nextStateCounter);
	counterState = nextStateCounter;
}

function renderCounter(stateComponent) {
	if (stateComponent.number !== counterState.number) {
		counter.value = stateComponent.number;
	}
}

function setNumber(number) {
	setCounterState({...counterState, number});
}

function clearInput() {
	let clearValue = '';
	for (let i = 0; i < counter.value.length; i++) {
		if (!isNaN(Number(counter.value[i]))) {
			clearValue += counter.value[i];
		}	
	}
	counter.value = clearValue;
	return clearValue;
}

// 2.05.2023 Решение
const counterBtnsGroup = document.querySelector('.counter-btns-wrapper'),
	  counterBtns = counterBtnsGroup.querySelectorAll('.btn');

let saveItem = () => {
	localStorage.setItem('state', JSON.stringify(counterState));

	console.log("counter state is saved, counter value: ", counter.value);
}    

let getItem = () => {
	let stateFromStorage = JSON.parse(localStorage.getItem('state'));
	console.log("stored counter state is: ", stateFromStorage);
}

let removeItem = () => {
	localStorage.removeItem('state');
	console.log("counter state is deleted from storage");
}

let clearAll = () => {
	localStorage.clear();
	console.log("local storage is cleared");
}

let showKey = () => {
	let stateFromStorage = JSON.parse(localStorage.getItem('state'));
	const keys = Object.keys(stateFromStorage);
		keys.forEach(key => {
			console.log("key: ", key);
		});
}
let showLength = () => {
	let stateFromStorage = JSON.parse(localStorage.getItem('state'));
	console.log(localStorage.length);
}

let localStorageHandler = event => {
	if (event.target.classList.contains('set-btn')) {
		saveItem();	
	} else if (event.target.classList.contains('get-btn')) {
		getItem();
	} else if (event.target.classList.contains('remove-btn')) {
		removeItem();
	} else if (event.target.classList.contains('clear-btn')) {
		clearAll();
	} else if (event.target.classList.contains('show-key-btn')) {
		showKey();

	} else if (event.target.classList.contains('show-length-btn')) {
		showLength();
	}
}

counterBtns.forEach(item => item.addEventListener('click', localStorageHandler));

	// напишите togoList используя localStorage + JSON
	// функции todoList - добавление, удаление ( * необязательно - вычеркивание, редактирование)

	// Должна быть кнопка **сохранить todo list**
	// Данные должны храниться в браузере и при перезагрузки страницы 
	// загружаться актуальные с последнего сохранения (инициализация всего списка)

const todoInput = document.querySelector('.todo-input'),
	  todoForm = document.querySelector('.todo-form'),
	  todoList = document.querySelector('.todo-list'),
	  todoSave = document.querySelector('.save-btn'),
	  clearStorage = document.querySelector('.clear-storage');

todoForm.addEventListener('submit', formHandler);
todoList.addEventListener('click', listHandler);
todoSave.addEventListener('click', saveTodo);
clearStorage.addEventListener('click', clearTaskStorage);

let todosArr = [];
let todo = {};

function formHandler(event) {
	event.preventDefault();
	if (todoInput.value) {
		addTodo(todoInput.value);
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
	let todo = {};
	todo.text = value;
	todo.id = Date.now();
	todo.done = false;
	renderTodo(todo);
	todosArr.push(todo);
}

function saveTodo() {
	console.log(JSON.stringify(todosArr));
	localStorage.setItem('task list', JSON.stringify(todosArr));
}

function deleteTodo(target) {
	target.closest('.todo-item').remove();

	todosArr = JSON.parse(localStorage.getItem('task list'));
	let id = Number(target.closest('.todo-item').dataset.id);
	for (let i = 0; i < todosArr.length; i++) {
		if (todosArr[i].id === id) {
			todosArr.splice(i, 1);
		} 
	}			
}
function clearTaskStorage() {
	localStorage.removeItem('task list');
	console.log("task list is deleted from storage");

}

function renderTodo(obj) {
	let text = document.createElement('label');
	text.classList.add('todo-text');
	text.setAttribute('for', 'text');
	text.textContent = obj.text;

	let deleteIcon = document.createElement('span');
	deleteIcon.classList.add('delete-item');

	let li = document.createElement('li');
	li.classList.add('todo-item');
	li.dataset.id = obj.id;

	li.appendChild(text);
	li.appendChild(deleteIcon);
	todoList.append(li);
	todoInput.value = '';
}

function renderListFromStorage() {
	if (localStorage.length !== 0) {
		let todoListFromStorage = JSON.parse(localStorage.getItem('task list'));
		console.log(todoListFromStorage);
		todoListFromStorage.forEach(item => todosArr.push(item));
		todoListFromStorage.forEach(item => renderTodo(item));
	} else {
		console.log('there is no list in storage');
	}
}

renderListFromStorage();