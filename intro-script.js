// // variables
// // let - пусть это существует
// // мы сами придумываем переменные
// // = - оператор присвоения
// let box; //undefined
// console.log( box );
// box = 3 + 2; //5
// console.log( box );
// box = 7 + 3; //10
// console.log( box );
// // Строки и три типа кавычек для синтаксической работы со строками
// let string = 'Alex';
// let string2 = "Alex"; // самый популярный способ
// let string3 = `Alex ${box}`; // ${} переменные выделяются белым цветом в текстовом редакторе обычно

// console.log(string);
// console.log(string2);
// console.log(string3);

// // переменные нужно пытаться называть семантически. что будет хранить эта коробка? ее нужно назвать соответсвенно
// let userName = 'Alex'; // camelCase переменные с мал буквы

// // переменные называем в одно слово
// // старый способ объявления переменных. Область видимости переменных? Конфликт имен?
// var oldVar = 123;

// let message; // инициализация переменной
// console.log(message); // undefind
// message = 'Hello'; 
// console.log(message);
// message = 123; 
// console.log(message);
// message = 'Привет'; 
// console.log(message);

// // Синтаксический сахар извращения
// //let user = 'John';
// //let age = 25;
// //let hello = 'Hello';

// let user = 'John',
// age = 25,
// hello = 'Hello';
// console.log(user, age, hello)

// const myBirthday = ' 11.07.1999'; // константа это переменная которую нельзя переприсвоить . сразу при создании присваивать значение нужно, ее значение нельзя ниже поменять
// // let меняется const не меняется

// //
// //
// //

// //let message = 'hello world!';
// //let message = ' ';

// // boolean true/false.
// let isLoginUser = false; // type boolean
// isLoginUser = true; // type boolean

// // null для неизвестных значений. Значение явного отсутствия
// // undefind для неприсвоенных значений
// // object для более сложных структур данных для коллекций, для объектов
// // symbol для уникальных идентификаторов
// // string для строк

// let age = 31; // number
// let name = 'vlad'; // string
// let human = true; // boolean
// let left = null; // null
// let right; // undefind
// let obj = {} // [] object
// // Оператор typeof
// // позволяет нам увидеть какой тип данных сохранен в переменной
// let user; // undefind
// let userType = typeof user;
// console.log(user); // undefind
// console.log(userType); // "undefind"

// //let notResponce = null;
// //let notResponceType = typeof notResponce;

// // let obj = {}; // object
// const message = 'Hello, world'; // type string
// const messageType = typeof message;
// console.log(messageType); // "string"

// // typeof имеет две формы typeof x typeof()

// // Конвертация типов
// // 
// //
// //
// // Превратить значение в строку

// const pi = 3.14; // 3.14 number
// const piString = String(pi); // "3.14" string
// console.log(pi, piString);
// console.log(typeof pi, typeof piString);


// const isTrue = true;
// const isTrueString = String(isTrue);
// // вычисление идет пока есть, что вычислять

// // Преобразование к числу превратить

// const piString = '3.14';
// const piNumber = Number(piString);
// console.log(piString, piNumber);
// console.log(typeof piString, typeof piNumber);
// // делаем математические операции, проверяем возрасть пользователя например
// // NaN not a number
// // Логическое происходит в логических операциях. может быть вызвано с помощью Boolean(value).

// const someString = 'kkk';
// const someBoolean = Boolean(someString);
// console.log(someString, someBoolean);
// console.log(typeof someString, typeof someBoolean);


// // 0 это ложь остальные числа это правда
// //const someNumber = 50;
// //const someBoolean = Boolean(someNumber);
// //console.log(someNumber, someBoolean);
// //console.log(typeof someNumber, typeof someBoolean);

// // undefind null ' ' 0 это false


// // Задачка
// // Работа с переменными

// // Объявите две переменные: admin и name.
// // Запишите строку "Джон" в переменную name.
// // Скопируйте значение из переменной name в admin.
// // Выведите на экран значение admin, используя функцию alert, console.log (должна показать «Джон»).

// let admin;
// let name;
// name = 'John';
// admin = name;
// console.log(admin);

// // Придумайте правильные имена
// let ourPlanetName;
// let currentUserName;

// // Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// // Создайте переменную для хранения имени текущего посетителя сайта. 
// // Как бы вы назвали такую переменную?




// // Какие буквы (заглавные или строчные) использовать для имён констант?
// // Рассмотрим следующий код:

// // const birthday = '18.04.1982';

// // const age = someCode(birthday);
// // У нас есть константа birthday, а также age, 
// // которая вычисляется при помощи некоторого кода, 
// // используя значение из birthday 
// // (в данном случае детали не имеют значения, поэтому код не рассматривается).

// // Можно ли использовать заглавные буквы для имени birthday? 
// // А для age? Или одновременно для обеих переменных?

// // const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?

// // const AGE = someCode(BIRTHDAY); // а здесь?

// // Конвертируем типы

// Number
// const age = 15;

// // console typeof
// console.log("type age: ", typeof age, age);

// // String typeof
// const ageString = String(age);
// console.log("type ageString: ", typeof ageString, ageString);

// // Boolean typeof
// const ageBoolean = Boolean(age);
// console.log("type ageBoolean: ", typeof ageBoolean, ageBoolean);

// // Number typeof
// const ageNumber = Number(age);
// // console.log("type ageNumber: ", typeof ageNumber, ageNumber);
// let age = 15;

// // console typeof
// console.log("type age: ", typeof age, age); // number 15

// // String typeof
// age = String(age);
// console.log("type age: ", typeof age, age); // string "15"

// // Boolean typeof
// age = Boolean(age);
// console.log("type age: ", typeof age, age); // boolean true

// // Number typeof
// age = Number(age);
// console.log("type age: ", typeof age, age); // number 1

// // косые кавычки только там, где javaScript выражения

// //OPERATORS
// // ОПЕРАТОРЫ сравнения
// // >< больше/меньше
// console.log('1 > 2', 1 > 2); // false
// // != не равен
// console.log
// // меньше или равен <=
// // больше или равен >=

// // Оператор присвоения let
// // Операторы тождества
// // жесткое тождество,(жесткое сравнение по типу ===)
// console.log("100 === '100'", 100 === '100' ); // - false
// console.log( 100 !== '100' ); // true 
// // приведение к типу == (не жесткое тождество)
// console.log("100 == '100'", 100 == '100' ); // - true
// // отрицание
// console.log( 100 != '100' ); // false
// // js пытается при сравнении приводить к одному типу, если получается, то сравнивает

// // if else условный оператор
// // if () {} // базовый синтаксис условия
// // if (/* условие true/false */) {
// 	// тело условия
// 	//}

// 	let age = 30;
// 	const message = 'Привет, ну ты старый!';

// 	if (age > 25) {
// 		console.log('Привет, ну ты старый!');
// 	} else {
// 		console.log('Привет, ну ты зумер!');
// 	}

// 	let userAge = 19;
// 	if (userAge === 18) { // если userAge > 18 true то выполнить
// 		console.log('Ты выиграл приз!' )

// 	}


// 	//
// 	let currentValue = null;

// 	if (currentValue) {
// 		console.log('Это положительное значение')
// 	} else if (typeof currentValue === 'string') {
// 		console.log('Это пустая строка...')
// 	} else {
// 	console.log('Это мало того что false так и не строка')	
// 	}

// 	let inputAge = '31';

// 	if (Number(inputAge) > 18 ) {}


// let number = -1;
// let str = '1';

// console.log(number + Number(str));

// if (number) {}

// LOGIC OPERATORS
// || - логическое ИЛИ
// && - логическое И
// ! - логическое НЕ




//Задачи
// let name = "Ilya";

// // console.log( `hello ${1}` ); // hello 1
// console.log( `hello ${"name"}` ); // hello name
// console.log( `hello ${name}` ); // hello Ilya



// 	- У нас есть новый дом на 1000 квартир
		// 	- 100 квартир купили в кредит
		// 	- 100 квартир купили за наличные
		// 	- 200 квартир арендовали
		// 	- Оставшиеся квартиры стоят пустые
// let newHouse = 1000;
// let creditAparts = 100;
// let cashAparts;
// let rentHouse = 200;
// let emptyAparts = 
		// 	- Сколько всего квартир уже занято?
		// 	- Сколько квартир ещё нужно занять?

		// 	- Чего больше занятых квартир или не занятых? (вывести значение в консоль)


		// 	- в зависимости от того каких квартир больше 
		// 	выводите в консоль сообщение об этом 'У нас больше пустых квартир' или 'У нас больше занятых квартир'

// ДОМАШНЕЕ ЗАДАНИЕ
// - У нас есть 100 (создать константу)
const money = 100;
console.log("Было денег: ", money);
// - Цена помидоров на рынке - 10 (создать константу)
const priceTomatos = 10;
// - Цена огурцов на рынке - 5 (создать константу)
const priseCucumbers = 5;
// - Цена яблок на рынке - 15 (создать константу)
const priceApples = 15;
// - Оставшиеся деньги потратим на орехи (создать переменную)
let purchaseNuts;
console.log("Потратили на орехи: ", purchaseNuts);
// - Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
let purchaseAllElse = priceTomatos* 2 + priseCucumbers* 2 + priceApples* 2;
console.log("Потратили на овощи и фрукты: ", purchaseAllElse);

// - оставшиеся деньги потратили на орехи (присвоить значение переменной)
purchaseNuts = money - purchaseAllElse;
// - сколько денег мы потратили на орехи? (вывести переменную в консоль)
console.log("Потратили на орехи: ", purchaseNuts);
// - на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)
console.log(Boolean(purchaseNuts > purchaseAllElse));
if (Boolean(purchaseNuts > purchaseAllElse)) {
console.log('Больше потратили на орехи')
} else { console.log('Больше потратили на фрукты и овощи') };

// - в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
// выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'		