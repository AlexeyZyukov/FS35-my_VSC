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
//Используя array.indexOf(genre) выполняем поиск первого совпадения текущего элемента genre и получаем его индекс 
//в оригинальном массиве всех genres. В параметре index хранится индекс текущего элемента genre при переборе массива методом filter.
//Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение 
//встречается в массиве и на текущей итерации фильтр обрабатывает именно его.
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
// const allGenres = books.flatMap((genre) => genre.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
// console.log(uniqueGenres);
// //===================
// //const allGenres = books.flatMap(function (genre) {
// //allGenres => allGenres.push(genre)
// //}); //- попытка понять что такое genre.genres
//__________________________________________________________________________________
//# 17-44 Метод filter() и массив объектов
//пример из урока:
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон - пример из урока.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((rate) => rate.rating > MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter((item) => item.author === AUTHOR);
// console.log(booksByAuthor)
//_________________________________________________________________________________
//# 18-44 Пользователи с цветом глаз
// Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color)
// };
// // Пиши код выше этой строки
// console.log(getUsersWithEyeColor)

// let result = getUsersWithEyeColor([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
// ], "blue")
// console.log(result)
//__________________________________________________________________
//# 19-44 Пользователи в возрастной категории
// Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter((user) => user.age > minAge && user.age < maxAge)
// };
// // Пиши код выше этой строки
// let result = getUsersWithAge ([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
// ], 20, 30)
// console.log(result)
//__________________________________________________________
//# 20-44 Пользователи с другом - includes() - для поиска в массиве данных
// Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//    return users.filter((user) => user.friends.includes(friendName))
// };
// // Пиши код выше этой строки
// let result = getUsersWithFriend ([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
// ], 'Briana Decker')
// console.log(result)
//_______________________________________________________________
//# 21-44 Список друзей
  //Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей 
//(свойство friends).У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы 
//возвращаемый массив не содержал повторений.
// Пиши код ниже этой строки

// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   //console.log(allFriends)
//   return allFriends.filter((friend, index, array) => array.indexOf(friend) === index)
// };
// // Пиши код выше этой строки
// let result = getFriends([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Padilla Garrison', 'Aisha Tran', 'Sharron Pace'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
// ])
// console.log(result)
//________________________________________________________________
//# 22-44 Активные пользователи
//Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, 
//значение свойства isActive которых true.
// Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//    return users.filter((user) => user.isActive)
// };
// // Пиши код выше этой строки
// let result = getActiveUsers([{
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },])
//   console.log(result)
//________________________________________________
//#23-44 Неактивные пользователи
//Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, 
//значение свойства isActive которых false.
// Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//    return users.filter(user => !user.isActive)
// };
// // Пиши код выше этой строки
// let result = getInactiveUsers([{
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },])
//   console.log(result)
//_________________________________________________________
//#24-44 Метод find()
//метод find(callback) позволяет найти и вернуть первый подходящий элемент, 
//после чего перебор массива прекращается.То есть он ищет до первого совпадения.
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
//________________________________________________________________________
//#25-44  Пользователь с почтой
// Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email)
// };
// // Пиши код выше этой строки
// let result = getUserWithEmail([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ], 'shereeanthony@kog.com')

// console.log(result)
//______________________________________________________
//#26-44 Метод every()
//Метод every(callback) проверяет проходят ли все элементы массива тест предоставляемый 
//коллбек - функцией.Возвращает true или false.
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((element) => element % 2 === 0);
// console.log(eachElementInFirstIsEven);
// const eachElementInFirstIsOdd = firstArray.every((element) => element % 2 !== 0);
// console.log(eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every((element) => element % 2 === 0);
// console.log(eachElementInSecondIsEven);
// const eachElementInSecondIsOdd = secondArray.every((element) => element % 2 > 0);
// console.log(eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every((element) => element % 2 === 0);;
// const eachElementInThirdIsOdd = thirdArray.every((element) => element % 2 > 0);
//____________________________________________________
//#27-44 Все ли пользователи активны
// Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive) 
// };
// // Пиши код выше этой строки
// let result = isEveryUserActive([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
// ])
// console.log(result)
//___________________________________________________________
//#28-44 Метод some()
//Метод some(callback) проверяет проходит ли хотя бы один элемент массива тест предоставляемый 
//коллбек - функцией.Возвращает true или false.
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((element) => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((element) => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((element) => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((element) => element % 2 > 0);

// const anyElementInThirdIsEven = thirdArray.some((element) => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((element) => element % 2 > 0);
//__________________________________________________________________________
//#29-44 Есть ли активные пользователи

// Пиши код ниже этой строки
// const isAnyUserActive = users => {
//    return users.some((user) => user.isActive);
// };
// // Пиши код выше этой строки
// let result = isAnyUserActive([{
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
// ])
// console.log(result)
//___________________________________________________________________
//#30-44 Метод reduce()
//Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива 
//с сохранением промежуточного результата, как аккумулятор.Немного сложнее других в усвоении, но результат стоит того.
// array.reduce((accumulator, element, index, array) => {
//   // Тело коллбек-функции
// }, initialValue);
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((accum, value) => accum + value);
// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
//_____________________________________________________________________________
//#31-44 Метод reduce() и массив объектов
//При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. Например, есть массив студентов с баллами за тест. 
//Необходимо получить средний бал.
//Пример из конспекта урока: ==========================
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];
// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// const averageScore = totalScore / students.length;
// console.log(averageScore)
//============================
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((accum, player) => {
//   return accum + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame)
//_____________________________________________________________
//#32-44 Общий баланс пользователей
// Пиши код ниже этой строки
// const calculateTotalBalance = users => 
//    users.reduce((accum, user) => {
//    return accum + user.balance;
// }, 0)
// // Пиши код выше этой строки
// let result = calculateTotalBalance([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
// ])
// console.log(result)
//______________________________________________________
//#33-44 Общее количество друзей
//Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала 
//общее количество друзей(свойство friends) всех пользователей из массива users.
// Пиши код ниже этой строки
// const getTotalFriendCount = users =>
//   users.reduce((allFriends, user) => {
//     // console.log(allFriends)
//     // console.log(user)
//     allFriends.push(...user.friends);
//     //console.log(allFriends)
//     return allFriends;
//   }, []).length; //решение на форуме

// const getTotalFriendCount = users =>
//   users.reduce((allFriends, { friends }) => {
//     allFriends.push(...friends);
//     return allFriends;
//   }, []).length;

// const getTotalFriendCount = function (users) {
//   users.reduce((accum, { friends }) => {
//      console.log(accum);
//     // console.log(friends);
//     accum.push(...friends);
//     return accum;
//   }, []);
// };
// // // Пиши код выше этой строки
//===============ниже решение от модератора====================
// const getTotalFriendCount = users => {
//   return users.reduce((acc, el) => acc + el.friends.length, 0) 
// };
// let result = getTotalFriendCount([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
// ])
// console.log(result)
// //______________________________________________________________
//# 34-44 Метод sort()
//Из-за того, что сортируется исходный массив, нарушается принцип чистоты функций 
//и нельзя удобно сделать несколько производных коллекций на базе исходной.Например, 
//сделать коллекцию отсортированную по возрастанию, а другую по убыванию.
//Поэтому перед сортировкой делают полную копию исходного массива и сортируют уже её.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
//______________________________________________________________
//#35-44 Свой порядок сортировки чисел
//firstEl - первый элемент для сравнения.
//secondEl - второй элемент для сравнения.
//Если вызов compareFunction(firstEl, secondEl) возвращает любое отрицательное значение, 
//то есть firstEl меньше secondEl, сортировка поставит firstEl перед secondEl.
//Это сортировка по возрастанию.
//Если вызов compareFunction(firstEl, secondEl) возвращает любое положительное значение больше нуля, 
//то есть secondEl больше firstEl, сортировка поставит secondEl перед firstEl.
//Это сортировка по убыванию.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort((firstEl, secondEl) => firstEl - secondEl);
// //Если вызов compareFunction(firstEl, secondEl) возвращает любое положительное значение больше нуля, 
// //то есть secondEl больше firstEl, сортировка поставит secondEl перед firstEl.
// //Это сортировка по убыванию.
// const descendingReleaseDates = [...releaseDates].sort((firstEl, secondEl) => secondEl - firstEl);
//_________________________________________________________
//# 36-44 Свой порядок сортировки строк - localeCompare()
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((firstString, secondString) => firstString.localeCompare(secondString));
  
//   const authorsInReversedOrder = [...authors].sort((firstString, secondString) => secondString.localeCompare(firstString));
//_____________________________________________________________
//# 37-44 Сортировка объектов
//При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort(
//   (firstStr, secondStr) =>
//     firstStr.author.localeCompare(secondStr.author));

// const sortedByReversedAuthorName = [...books].sort(
//   (firstStr, secondStr) =>
//     secondStr.author.localeCompare(firstStr.author));

// const sortedByAscendingRating = [...books].sort(
//   (firstEl, secondEl) =>
//     firstEl.rating - secondEl.rating);

// const sortedByDescentingRating = [...books].sort(
//   (firstEl, secondEl) =>
//     secondEl.rating - firstEl.rating);
//__________________________________________________________
//# 38-44 Сортировка массива по балансу
// Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//    let usersBallance = [];
//   usersBallance = [...users].sort(
//     (firstEl, secondEl) =>
//       firstEl.balance - secondEl.balance);
//   return usersBallance;
// };
// // Пиши код выше этой строки
// let result = sortByAscendingBalance([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ])
// console.log(result);
//_________________________________________________________________
// 39-44 Сортировка по количеству друзей
//Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей 
//отсортированный по убыванию количества их друзей(свойство friends).
// Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//   let friendsQuantity = [];
//   friendsQuantity = [...users].sort((a, b) => b.friends.length - a.friends.length);
//   return friendsQuantity;   
// };
// Пиши код выше этой строки
//______________________________________________________________
// 40-44 Сортировка по имени
// Пиши код ниже этой строки
// const sortByName = users => {
//   let nameSorted = [];
//   nameSorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
//   return nameSorted;
// };
// // Пиши код выше этой строки
//_______________________________________________________________
//# 41-44 Цепочки методов (чейнинг, chaining)
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map(book => book.author);
// console.log(names)
//_____________________________________________________________________________
//# 42-44  Пользователи и друзья
//Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей 
//отсортированный по возрастанию количества их друзей(свойство friends).
// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//   let result = [...users].sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
//   return result;
// };
// // Пиши код выше этой строки
// let result = getNamesSortedByFriendCount ([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ])
// console.log(result);
//# 43-44 Имена друзей
//Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей 
//(свойство friends) отсортированный по алфавиту.
// Пиши код ниже этой строки
// const getSortedFriends = users => {
//   let result = users.flatMap(user => user.friends)
//    .filter((friend, index, array) => array.indexOf(friend) === index)
//    .sort((a, b) => a.localeCompare(b));
//   return result;
// };

// // Пиши код выше этой строки
// let result = getSortedFriends ([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ])
// console.log(result);
//______________________________________________________________
//# 44-44 Общий баланс
//Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), 
//пол которых(свойство gender) совпадает со значением параметра gender.
// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  let result = users.filter(user => user.gender === gender)
    .reduce((accum, user) => accum + user.balance, 0);
  return result;
};
// Пиши код выше этой строки
let result = getTotalBalanceByGender ([
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
], "male")
console.log(result);