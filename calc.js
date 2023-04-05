// нужно ловить все события, связанные со всеми кнопками
// функция пуш в инпут новый символ для цифр
// функция для мат знаков пушить символы через пробелы
// функция для удаления символа один клик - один символ с конца строки удаляется
// функция посчитать и поменять в инпуте на результат, если парсинг не вернул ошибку

// btn-number классы калькулятора для js
// btn-operator
// btn-delete
// btn-result
let calcField = document.querySelector('.calc-field');

let btnNumbers = document.querySelectorAll('.btn-number');
let btnOperators = document.querySelectorAll('.btn-operator');

let btnDelete = document.querySelector('.btn-delete');
let btnResult = document.querySelector('.btn-result');
let resultState = false;

btnDelete.addEventListener('click', deleteSymbol);
btnResult.addEventListener('click', getResult);
// массив надо переьирать чтобы к его элементам прикрепить прослушку

btnNumbers.forEach(item => item.addEventListener('click', writeToInput));
btnOperators.forEach(item => item.addEventListener('click', writeToInput));
// тут надо переменными заменить условия

function writeToInput(event) {
	let symbol = event.target.textContent;
	let input = calcField.value;
	let lastSymbol = input[input.length - 1];
const isOperator = event.target.classList.contains("btn-operator"),
      isNewValue = input.length === 0,
      isZero = symbol === "0",
      isLastOperator = lastSymbol === " ";

	if (isOperator) {
		if (isNewValue || isLastOperator) {
			console.log('Введите правельный символ');
		} else {
			if (resultState) {
				resultState = false;
			}
			input += ` ${symbol} `;
		}
	} else {
		if ((isNewValue || isLastOperator) && isZero) {
			console.log('Введите правельный символ');
		} else {
			if (resultState) {
				resultState = false;
				input = '';
			}
			input += symbol;
			}	
	}
	calcField.value = input;
}

function deleteSymbol(event) {
	let input = calcField.value;
	if (input.length) {
		if (input[input.length - 1] === ' ') {
			input = input.slice(0, -3);
		} else {
			input = input.slice(0, -1);
		}
	} else {
		console.log('Нет символов')
	}
	calcField.value = input;
}


function getResult() {
	let input = calcField.value;
	const	lastSymbol = input[input.length - 1],
      	isNewValue = input.length === 0,
      	isLastOperator = lastSymbol === " ";

	if (isLastOperator || isNewValue) {
		console.log('Это ошибка!');
	} else {
    let expression = input.split(" ").join(""),
      	result = eval(expression);

  	input = result;
  	calcField.value = input;
		resultState = true;
	}
};


// function getResult(event) {
// 	let input = calcField.value;
// 	let arrayOfInput = input.split(' ');
// 	console.log(arrayOfInput);
// 	let numbersArray = [];
// 	let operatorsArray = [];
// 	for (let i = 0; i < arrayOfInput.length; i++) {
// 		if (!isNaN (Number(arrayOfInput[i]))) {
// 			numbersArray.push(Number(arrayOfInput[i]));
// 		} else {
// 			operatorsArray.push(arrayOfInput[i])
// 		}
// 	}
// 	console.log(numbersArray);
// 	console.log(operatorsArray);
// 	if (operatorsArray.includes('+')) {
// 		let sum = 0;
// 		numbersArray.forEach(item => sum += item);
// 		calcField.value = sum;

// 	} else if (operatorsArray.includes('-')) {
// 		for (let i = 1; i < numbersArray.length; i++) {
// 			let subtr = numbersArray[0] - numbersArray[i];
// 			calcField.value = subtr;
// 		}
		

// 	// } else if (operatorsArray.contains('/')) {

// 	// } else if (operatorsArray.contains('*')) {

// 	} else {
// 		console.log('Нет оператора');
// 	}
// 	 }