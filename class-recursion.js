// Реализуйте класс Student, 
// который будет наследовать от класса User. 
// Этот класс должен иметь следующие свойства: 
// name (имя, наследуется от User), 
// surname (фамилия, наследуется от User), 
// year (год поступления в вуз, не наследуется от User).

// Класс должен иметь метод getFullName() (наследуется от User), 
// с помощью которого можно вывести одновременно имя и фамилию студента.

// Также класс должен иметь метод getCourse() (не наследуется от User), 
// который будет выводить текущий курс студента (от 1 до 5). 

// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
// Текущий год получите самостоятельно.

// Вот так должен работать наш класс:

// let student = new Student('Иван', 'Иванов', 2020);
// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2020
// console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2023

// Вот так должен выглядеть класс User, от которого наследуется наш Student:

class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User {
    constructor(name, surname, year) {
        super();
		this.name = name;
		this.surname = surname;
        this.year = year;
	}
    getCourse() {
        let course;
        let currentYear = new Date().getFullYear();
        course = currentYear - this.year;
        return course;
    }
}

let masha = new Student("Maria", "Shukholukova", 2019);
console.log(masha);
console.log(masha.getFullName());
console.log("course: ", masha.getCourse());
console.log(masha.name); 
console.log(masha.surname); 
console.log(masha.year); 


// Найти максимальное число в массиве, содержащем числа или другие массивы чисел
// Решите это итеративно (через цикл) и отдельно затем рекурсивно.

let numbers = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

let getMaxNum = function(array) {
   let flatArr = array.flat(Infinity);
        let max = array[0];
    
        for (let i = 0; i < flatArr.length; i++) {
            if (flatArr[i] > max) {
                max = flatArr[i];
            } 
        }
        return max;
    }
    
console.log(getMaxNum(numbers));

let getMaxNumRec = function(array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "object") {
            array[i] = getMaxNumRec(array[i]);     
        }
        if (array[i] > max) {
            max = array[i];   
        }
      }
      return max;
}

console.log(getMaxNumRec(numbers));