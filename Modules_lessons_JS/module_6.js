"use strict"
//Module 6
//_____________________________________________________________________
//пример из конспекта для метода filter()
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(item => item.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(item => !item.isActive);
// console.log(inactiveUsers);
// //________________________________________________________________
// //пример из конспекта для метода find()
// const numbers = [3, 0, 1, 2, 4, 5, 7, 8, 6, 9];

// console.log(numbers.find(num => num > 5)); // 7
// console.log(numbers.find(num => num < 5)); // 3
// console.log(numbers.find(num => num === 5)); // 5

// //_______________________________________________________________
// //примеры из конспекта для every() & some()
// // Функция которая проверяет величину значения, возвращает true или false.
// const isBigEnough = val => val >= 10;

// // Допустим нам нужно узнать достаточно ли большие ВСЕ числа в коллекции.
// // Все что нам нужно это буль true/false. Метод every вернет true только тогда,
// // когда все элементы коллекции будут удовлетворять условию в callback-функции.

// console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// // Допустим нам нужно узнать ЕСТЬ ЛИ в коллекции числа больше 10, хотя бы одно
// // или больше. Все что нам нужно это буль true/false. Метод some вернет true
// // только тогда, когда хотябы 1 или более элементов коллекции будут
// // удовлетворять условию в callback-функции.

// console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
// console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true

// //_________________________________________________________________
// //метод reduce()
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдем по всем элементам коллекции и прибавим значения свойства likes
// // к аккумулятору, начальное значение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32 - почему такое значение при initialValue = 0???

// // Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// // для подсчета лайков из коллекции
// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(countLikes(tweets)); // 32

//_______________________________________________
//# 1-44 Метод forEach(callback)
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   //for (let i = 0; i < orderedItems.length; i += 1) {
//     //totalPrice += orderedItems[i];
//   //}
//   orderedItems.forEach(function (item) //метод перебирает каждый item в массиве
//   {
//     totalPrice += item; //каждый item обрабатывается функцией коллбак
// })
//   // Пиши код выше этой строки
//   return totalPrice;
// }

// № 2-44 Задача. Фильтрация массива чисел
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   })
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

//________________________________________________
//# 3-44 Общие элементы
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }
//   firstArray.forEach((element) => //стрелочная функция (element) => заменила запись function(element)
//   {
//     if (secondArray.includes(element)) {
//          commonElements.push(element);
//        }
//   });
//     return commonElements;
//     // Пиши код выше этой строки
//   }

//____________________________________________________
//# 4-44 Стрелочные функции.
// Пиши код ниже этой строки
//function calculateTotalPrice(quantity, pricePerItem) { //это замененное выражение
// const calculateTotalPrice = (quantity, pricePerItem) => {
  
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

//_________________________________________________________
//№ 5-44 Стрелочные функции как коллбеки
// //№ 5-44 Неявный возврат
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => 
//   quantity * pricePerItem;

// Пиши код выше этой строки

//_________________________________________________________
//№ 6-44 Стрелочные функции как коллбеки
// Пиши код ниже этой строки
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Пиши код выше этой строки