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
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Пиши код выше этой строки
//_______________________________________________________
//# 7-44 Фильтрация массива чисел 2.0
//Замени объявление функции filterArray() и коллбек для метода 
//forEach() на стрелочные функции.
// Пиши код ниже этой строки
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
  
//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
//# 8-44 Общие элементы 2.0
//Замени объявление функции getCommonElements() и коллбек для 
//метода forEach() на стрелочные функции.
// Пиши код ниже этой строки
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
  
//     firstArray.forEach(function (element) {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
//   const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
//     // Пиши код выше этой строки
//     return commonElements;
// }
  
// const result = getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// console.log(result);
//__________________________________________________________
//# 9-44 Чистые функции
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки (это первоначальный вариант - "грязная" функция, которую нужно изменить)
//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] % 2 === 0) {
//   //       numbers[i] = numbers[i] + value;
//   //     } 
//   // }
//   // return numbers;
//   // }
//   // let result = changeEven([21,18,23,14,13,18,5,21,19,5], 22);
//   // console.log(result);
//   // let result = changeEven([21,18,23,14,13,18,5,21,19,5,22,12,10,11], 22);
//   // console.log(result);
//     //мой вариант решения - в таком варианте обновляются ТОЛЬКО четные числа, но в новый массив
//   //записываются как четные обновленные, так и не четные не обновленные числа
//   let newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number += value);
//     }
//     else newArray.push(number);
//   });
//   return newArray;

//   //вариант решения от ментора:
//   // const newArr = []
//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] % 2 === 0) {
//   //       newArr.push(numbers[i] + value);
//   //     } else {
//   //     	newArr.push(numbers[i])
//   //     }
//   //   }
//   // return newArr
//     // Пиши код выше этой строки
// }
// let result = changeEven([21,18,23,14,13,18,5,21,19,5,22,12,10,18,11], 22);
// console.log(result);
//____________________________________________________________________
//#10-44 Метод map()
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки

// const planetsLengths = planets.map((planet) => planet.length); //результат перебора массива и применения callback функции 
// //к каждому элементу, записывается в новый массив planetsLengths

// console.log(planetsLengths);
//____________________________________________________________________
//№ 11-44 Метод map() и массив объектов
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map((book) => book.title);
// console.log(titles);
//_____________________________________________________________________
//#12-44 Метод flatMap() - Метод flatMap(callback) аналогичен методу map(), но применяется 
//в случаях, когда результат это многомерный массив который необходимо «разгладить».
//Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает 
  //в новый массив.Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице 
  //(одна вложенность).Этот разглаженный массив и есть результат работы flatMap().
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
// const genres = books.flatMap((book) => book.genres);
// console.log(genres);
//___________________________________________________
//# 13-44 Задача. Имена пользователей
// Пиши код ниже этой строки
// const getUserNames = users.flatMap((user) => {
//   return user.name;
// });
//Мой вариант - не принимается ботом
// const getUserNames = function (users) {
//   users.map((user) => user.name);
//   return users;
// } // - не принимается ботом

// const getUserNames = users => {
//   return users.map((user) => user.name);
//   }; //- вариант принят ботом
 //const getUserNames = users => users.map(user => user.name); //- вариант принят ботом
  // Пиши код выше этой строки
//___________________________________________________________
//№ 14-44 Задача. Почты пользователей - решение аналогично задаче 13
// Пиши код ниже этой строки
// const getUserEmails = users => {
//   return users.map((user) => user.email)   
//   };
  // Пиши код выше этой строки
//_________________________________________________
//# 15-44 Методы filter и find
//Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, 
//а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки
// const evenNumbers = numbers.filter((number) => number % 2 === 0); 
//     console.log(evenNumbers);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(oddNumbers);
//_______________________________________________________________________
//# 16-44 Фильтрация уникальных элементов
//Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс 
//в оригинальном массиве всех курсов.В параметре index хранится индекс текущего элемента course при переборе массива методом filter.
//Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение 
//встречается в массиве и на текущей итерации фильтр обрабатывает именно его.
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
const allGenres = books.flatMap((genre) => genre.genres);
// const allGenres = books.flatMap(function (genre) {
//   allGenres => allGenres.push(genre)
// }); //- попытка понять что такое genre.genres
console.log(allGenres);
const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
console.log(uniqueGenres);
