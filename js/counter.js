const counter = document.querySelector('.counter'),
	  plus = document.querySelector('.plus'),
	  minus = document.querySelector('.minus');

counter.addEventListener('input', counterHandler);
plus.addEventListener('click', () => setNumber(Number(counter.value) + 1));
minus.addEventListener('click', () => setNumber(Number(counter.value) - 1));

let counterState = {
	number: 0,
	color: 'white'
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
	if (stateComponent.color !== counterState.color) {
		counter.color = stateComponent.color;
	}
}

function setNumber(number) {
	setCounterState({...counterState, number});
}

function setColor(color) {
	setCounterState({...counterState, color});
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

// function initialiseCounter() {
// 	renderCounter(counterState);
// } 

// Пишем функции через обьявление переменных. Экспрешн
// сначала описываем функции, потом вызываем
// описываем функции в отдельных файлах, ПОТОМ ЭКСПОРТИРУЕМ И ИСПОЛЬЗУЕМ