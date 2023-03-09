// ДОМАШНЕЕ ЗАДАНИЕ
	// 1)
	// 	Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

	// 	То есть дефисы удаляются, а все слова после них получают заглавную букву.

	// 	Примеры:

	// 	camelize("background-color") == 'backgroundColor';
	// 	camelize("list-style-image") == 'listStyleImage';
	// 	camelize("-webkit-transition") == 'WebkitTransition';
	// 	P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


const camelize = (string) => {
let stringSplit = string.split("-");
let newArr = [];
newArr.unshift(stringSplit[0]);
	for (let i = 1; i < stringSplit.length; i++) {
	let word =	stringSplit[i][0].toUpperCase() + stringSplit[i].substr(1);
	newArr.push(word);
	};
let camelised = newArr.join("");
return camelised;
 };
console.log(camelize("list-style-image"));
console.log(camelize("background-color")) ;
console.log(camelize("-webkit-transition"));
console.log(camelize("each-sweet-treat-goes-to-each-lovely-friend"));// 	

// 2)
	// 	Задача: написать функцию, принимающую массив чисел
	// 	и возвращающую сумму всех его положительных элементов и отрицательных 
	// 	чисел отдельно в виде нового массива

	// 	например функция принимает как аргумент следующий массив
	// 	arr = [1, -2, 3, 4, -9]

	// 	и должна вернуть [8, -11]
	// 	Сохраняйте вызов этой функции через деструктурирующее присваивание


arrayNumbers = [1, -2, 3, 4, -9,];
arrayNum = [1, -2, 3, 4, -9, -2, -23, 34, 7];

const getSumArray = numbersArr => {
	let positiveSum = 0;
	let negativeSum = 0;

		for (let i = 0; i < numbersArr.length; i++) {
			if (numbersArr[i] > 0 ) {
			positiveSum += numbersArr[i];

				} else if (numbersArr[i] < 0 ) {
				negativeSum += numbersArr[i];
			
					} else {
					undefined
				};
		};

	let resultArr = [];
	resultArr.push(positiveSum, negativeSum);
	return resultArr;
 };
console.log(getSumArray(arrayNumbers));
console.log(getSumArray(arrayNum)); 		

