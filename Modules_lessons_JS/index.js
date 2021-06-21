"use strict";

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
    
// //определить длину message;
// //сравнить длину message и maxLength;
// //если maxLength меньше чем длина message, выполнить slice до длины maxLength;
// //добавить ... в конец строки и вывести сообщение
  
  
//   if (message.length > maxLength) {
//   result = message.slice(0, maxLength) + "...";
    
//   } else {
//   result = message;
//   }
    
//   /// Change code above this line
//   return result;
// }

// myMessage = formatMessage("Curabitur ligula sapien", 30);
// console.log(myMessage);

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// 	message = message.toLowerCase()
//   if (message.includes("spam") || message.includes("sale")) 
//   { result = true} 
//   else {result = false}
//   // Change code above this line
//   return result;
// }
// mySpamCheck = checkForSpam("SpaM_not defined"); 
// console.log(mySpamCheck);


//* Используем цикл для вывода только нечетных чисел.
// * Для чётных i срабатывает continue, выполнение тела прекращается
//* и управление передаётся на следующую итерацию.

// const number = 20;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

// вывод четных и нечетных чисел

// const number = 20;
// for (let j = 0; j < number; j += 1) {
//   if (j % 2 === 0) {
//     console.log("Четное число j:", j)
//   } else {
//     console.log("Нечетное число j: ", j)
//   }
// }

// function sum() {
//     return 2 + 3;
// }

// let result = sum();

// console.log(result)



// Ошибки в консоли

// const name;

// console.log(age);
// let age;

// console.log('HELLO WORLSd')

// Определение типа значения, оператор typeof
// Валидация форм

// const productName = 'Mango';
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error);
// console.log(typeof quantity);

//Прерывание цикла: «break»
//Обычно цикл завершается при вычислении условия в false.
//Но мы можем выйти из цикла в любой момент с помощью специальной директивы break.
//Например, следующий код подсчитывает сумму вводимых чисел до тех пор, пока посетитель их вводит, а затем – выдаёт оезультат после нажатия Ок:

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

//т.н. ранний возврат - 2 примера ниже:
//1.
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//     if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//   return "Access denied, wrong password!";
// }
// checkPassword('jqueryismyjam');

//2.
// function checkStorage(available, ordered) {
    
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } return "The order is accepted, our manager will contact you";  
// }

// поиск самого длинного слова
// function findLongestWord(string) {  
// let longestWord = " ";
// let splitString = string.split(" ");
//   for (let i = 0; i < splitString.length; i++) {
//     if (longestWord.length < splitString[i].length) {
//       longestWord = splitString[i];
//     }
//   }
// 	return longestWord;  
// }
// let result = findLongestWord("Усилители суставов - это первый в мире наколенник, который использует специальную систему поддержки для обеспечения помощи при поднятии тяжестей.")
// console.log(result);

// function findMinNumber(number) {  
//     let minNumber = 0;
//   for (let i = 0; i <= number.length; i++) {
//     if (minNumber > number[i]) {
//   		minNumber = number[i];
//   		}  		
//     }  		
//    	return minNumber;	
// }
// let minResult = findMinNumber([1, 3, 2, 8, 4, 20, 16]);
// return minResult;

// выбор минимального числа из ряда чисел
// function findMinNumber(number) {
// let minNumber = 0;
// 	for (let i = 0; i < number.length; i++) {		
//    		if (minNumber > number[i]) {
//       		minNumber = number[i];
// 		}  		
//     }  		
//    	return minNumber;	
// }
// let minResult = findMinNumber([3, 2, 8, -4, 20, 16, -10]);
// console.log(minResult);

// // выбор максимального числа из ряда чисел
// function findMaxNumber(number) {
// let maxNumber = 0;
//   for (let i = 0; i < number.length; i++) {
		
//    		if (maxNumber < number[i]) {
//       		maxNumber = number[i];
// 		}  		
//     }  		
//    	return maxNumber;	
// }

// let maxResult = findMaxNumber([3, 2, 8, -4, 20.5, 16, -10]);
// console.log(maxResult);


//фильтрация массива чисел
// function filterArray(numbers, value) {  
// const newNumbers = [];
// //let newValue = 0;
// for (let number of numbers) {
//   if (value < number) {
//     newNumbers.push(number);
// 		}
// 	}
//   return newNumbers; 
// }

// let result = filterArray([1, 3, 5, 6], 3);
// console.log(result);

// рефакторинг метода выше с использованием цикла for ... of ...
// function filterArray(numbers, value) {
  
//   const filteredNumbers = [];
  
//   for (let item of numbers) {
//   let number = item;
//   if (number > value) {
//     filteredNumbers.push(number);

//     }
//   }
//   return filteredNumbers;
// }


//выбор четных чисел диапазона
// function getEvenNumbers(start, end) {
   
// let evenNumber = [];
//   for (let i = start; i <= end; i++) {
// 	if (i % 2 === 0) {
//       evenNumber.push(i);
//   }
//   }
//     return evenNumber

//   }
	
// let result = getEvenNumbers(3, 32)
// console.log(result);

//Метод includes()
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
  
//   return fruits.includes(fruit); // Change this line
// }


//для сортировки чисел:
//function sortNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr = [ 3, 1, 2, 15, 8 ];
// arr.sort(sortNumeric);
// alert(arr);


//массивы - общие элементы. Выборка эдементов, общих для 2-х массивов
// function getCommonElements(array1, array2) {
//   const commonElements = [];

//     for (let element of array1) {
//       if (array2.includes(element)) {
//         commonElements.push(element);
//             }
//     }
//   return commonElements;
// }

// let result = getCommonElements([1, 5, 3, 8, 6], [5, 6, 2, 1]);
// console.log(result) 

  
//Цикл for...of вместо счетчика цикла
//   function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
  
//   for (let item of order) {
//   	total +=item;
//   }
  
//     //ниже замененный код. item - соответствует order[i]
//   //for (let i = 0; i < order.length; i += 1) {
//   //total += order[i];
//   //}

//   return total;
// }
  
//получение результата проверки на истинность true / false
// function includes(array, value) { 
// for (let item of array)
// 	 return array.indexOf(value) === 0 ? true : false;
// }

// let result = includes([1, 3, 5, 7, 8, 9, 6], 6);
// console.log(result);

//___________________________________________________________________


// Шаблонные строки
// // Написать фразу с помощью шаблонных строк Здравствуйте, меня зовут А, мне Б лет и мне нравится Ц, где А, Б, Ц - переменные вставленные в строку.


// const name = 'Манго';
// const age = 5;
// const hobby = 'плавать';
// const message = `Здравствуйте, меня зовут ${name} мне ${age} лет и мне нравиться ${hobby}`;

// console.log(message);

// Prompt и confirm

// Спросить у пользователя имя, почту,  телефон и показать в консоле фразу "Пользоваель под именем ____ использует ____ почту и ____ телелефон"
// 1) Спросить имя юзера (prompt)
// 2) Спросить почту (prompt)
// 3) Спросить телефон (prompt)
// 4) Составить финальную фразу (template string)

// const userName = prompt('Enter your name');
// const email = prompt('Enter your email');
// const phoneNumber = prompt('Enter phon number');

// const message = `Пользоваель под именем ${userName} использует ${email} почту и ${phoneNumber} телелефон`;
// console.log(message);


// let userName, email, phone;

//  Базовые операторы +,-,*,/

// Проверка сложения

// let a = "Join ";
// let b = "us";
// console.log(a + b);
// console.log(typeof a + b)

// let a = 3;
// let b = ' join';
// console.log(a + b);

// let a = true;
// let b = " join";
// console.log(a + b);

// let a = true;
// let b = 12;
// console.log(a + b);

// let a = true;
// let b = true;
// console.log(a + b);

// let a = true;
// let b = "false";
// console.log(a + b);

// let a = 12;
// let b = null;
// console.log(a + b);

// let a = undefined;
// let b = 10;
// console.log(a + b);

// let a = undefined;
// let b = false;
// console.log(a + b);

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result);
// console.log(typeof result);


// Обьект Math
// // Определить площадь круга с радиусом 10см (ПR(2)). Math.pow(a, b) - возведение в степень

// const rad = 10;
// const PI = Math.PI;
// const powRad = Math.pow(rad, 2);
// const result = PI * powRad;
// console.log('result', result)



// const rad = 10;
// const area = Math.PI * Math.pow(rad, 2);
// console.log(area);



//Операторы сравнения и приведение типов
// // Каким будет результат этих выражений?

// console.log(5 > 4);
// console.log(10 >= "7"); 
// console.log("2" > "12");
// console.log("2" < "12");
// console.log("4" == 4);
// console.log("6" === 6);
// console.log("false" === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log("0" == false);
// console.log("0" === false);
// console.log("Ёнанас" < "ёжик");
// console.log("Ёнанас" === "ёжик");
// console.log(undefined == null);
// console.log(undefined === null);

// Посчитать суму товаров в козине магазина
// Нужно ввести цену 3-х товаров и посчитать их суму

// const phonePrice = Number(prompt('Enter phone price')); // 10
// const tvPrice = +prompt('Enter tv price'); // 12
// const playStationPrice = Number(prompt('Enter ps price')) // 8

// const result = phonePrice + tvPrice + playStationPrice;

// console.log(result); // 30





// if...else и prompt
// // Используя конструкцию if..else, напишите код, который будет спрашивать: «Какое количество месяцев в году». Если пользователь вводит 12 , то показать: «Верно!», в противном случае – отобразить: «Не знаете? 12t!»

// Тернарный оператор
// // Перепишите if...else с использованием тернарного оператора.

// const a = 1;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }


// // Пример 9 - Логические операторы
// // Что выведет код?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "hello");

// console.log(true && 0 && "hello");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log(null || 2 && 3 || 4);

//  Логические операторы и if
// // Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// const min = 14;
// const max = 90;
// const age = 30;

// Опертор %
// // Написать программу которая получит от пользователя число и определит четное это число или не четное.

// Написать программу где мы спрашиваем у пользователя месяц его рождения и показываем в какое время года он родился

// Если пользователь вводит 2 - показываем слово Зима
// Добавить проверку на ввод данных - ето должно быть числом целым и положительным


// Написать программу которая проверяет логин и пароль пользователя и выводит приветствие - если все отлично и ошибку если неверный логин

// const login = 'user@gmail.com';
// const password = '12345'


// Написать программу которая получит от пользователя число (количество минут) и выведёт на экран строку в формате часов и минут.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:1



// Написать игру камень - ножницы - бумага для игры с компютером
// Компютер загадывает свой вариант, юзер вводит свой и ми видим кто вииграл



