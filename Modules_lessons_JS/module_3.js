"use strict";

// Поиск объекта по значению свойства
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// let result = 0;
// function getProductPrice(productName) {
//   // Change code below this line
//   for (let item of products)
// 	//console.log(item);
// 	if (productName === item.name) {
// 	result = item.price;
// 	}
// 	return result;
	
//   // Change code above this line
// }

// getProductPrice("Radar");
// console.log(result);

//получение свойств из массива объектов по заданному ключу
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

//   const arrayOfProperties = [];
	
//     for (let item of products) //получение элементов массива (объектов) из массива 
//         //в цикле for ... of
// 	{
	
// 	if (propName in item) //условие проверки наличия ключа свойства в свойствах объекта
// 	{
// 	arrayOfProperties.push(item[propName]); //запись значений свойств в массив
// 	}	
// 		}
// 	return arrayOfProperties;

// }
// let result = getAllPropValues("name");
// console.log(result);


//Массив. Общая стоимость товара;
//Напиши функцию calculateTotalPrice(productName) которая принимает один 
//параметр productName - название товара.Функция должна вернуть общую стоимость
//(цена * количество) товара с таким именем из массива products
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let productTotalPrice = 0;
	
// 	for (let item of products) //получение элементов массива (объектов) из массива 
// 	{	
// 	if (productName === item.name) //условие проверки наличия значения ключа в свойствах объекта
// 	{
// 	productTotalPrice = item.price * item.quantity; //вычисление общей стоимости товаров указанной категории
// 	}	
// 		}
// 	return productTotalPrice;
// }
// let result = calculateTotalPrice("Radar");
// console.log(result);


//# 3/21 Деструктуризация объектов 
//Деструктуризация всегда находится в левой части операции присвоения. 
//Переменным внутри фигурных скобок присваиваются значения свойств объекта.Если имя переменной и имя свойства совпадают, 
//то происходит присваивание, в противном случае ей будет присвоено undefined.Порядок объявления переменных в фигурных скобках не важен.

//Замени объявления переменных yesterday, today и tomorrow одной операцией 
//деструктуризации свойств объекта highTemperatures.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // производим замену объявления переменных и присвоению им значений на деструктуризацию
// //const yesterday = highTemperatures.yesterday;
// //const today = highTemperatures.today;
// //const tomorrow = highTemperatures.tomorrow;

// //замена объявления 3-х переменных присвоением
// //им знечений путем деструктуризации.
// const {yesterday, today, tomorrow} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;


//# 3/22 Значения по умолчанию
//Для того чтобы избежать присвоения undefined при деструктуризации несуществующих 
//свойств, можно задать переменным значения по умолчанию,
//которые будут присвоены только в случае когда в объекте нет свойства с таким именем.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // производим замену объявления переменных и присвоению им значений на деструктуризацию
// //const yesterday = highTemperatures.yesterday;
// //const today = highTemperatures.today;
// //const tomorrow = highTemperatures.tomorrow;
// //const icon = highTemperatures.icon;

// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures

// // значанию icon присвоено св-во "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// № 3.23 - Изменение имени переменной
//При деструктуризации можно изменить имя переменной в которую распаковывается значение 
//свойства.Сначала пишем имя свойства из которого хотим получить значение, после чего 
//ставим двоеточие и пишем имя переменной в которую необходимо поместить значение этого свойства.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// № 3-24 Деструктуризация в циклах
// При переборе массива объектов циклом for...of получаются множественные обращения к свойствам объекта.
//Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.
//Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной в цикле for... of
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// // код до реструктуризации
// //for (const color of colors)
// //hexColors.push(color.hex);
// //rgbColors.push(color.rgb);

// for (const {hex, rgb,} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// # 3-25 Глубокая деструктуризация 
//Для деструктуризации свойств вложенных объектов используются те же принципы, что и в трёх предыдущих упражнениях.
// создается общая констатна, содержащая зачения из нескольких объектов
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // ниже первоначальный код, который нужно было реструктуризировать.
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const {today: {high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"}, 
//  tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",},} = forecast;


// № 3-26 Паттерн «Объект настроек»
//Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности что передавать. 
//В результате получается очень неочевидный код в месте её вызова.
//Паттерн «Объект настроек» помогает решить эту проблему, заменяя набор параметров всего одним - объектом с именованными свойствами.
//Тогда во время её вызова передаём один объект с необходимыми свойствами.
//Ещё один плюс в том, что можно деструктуризировать объект в передаваемом параметре


// function calculateMeanTemperature(forecast) {
//   //const todayLow = forecast.today.low;
//   //const todayHigh = forecast.today.high;
//   //const tomorrowLow = forecast.tomorrow.low;
//   //const tomorrowHigh = forecast.tomorrow.high;}

//   const {today: {low: todayLow, high: todayHigh,}, tomorrow: {low: tomorrowLow, high: tomorrowHigh,},} = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// result = calculateMeanTemperature ({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }); //возвращает 28.5
// console.log(result);

// № 3-27 Операция spread при передаче аргументов
//Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где ожидается набор 
//отдельных значений.Конечно есть некоторые ограничения, например нельзя распылить массив в объект и наоборот.
//в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается копия каждого элемента.
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//№ 3-28 Операция spread при создании нового массива
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores,];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


//№ 3-29 Операция spread при создании нового объекта
//Во время распыления можно добавлять свойства в произвольное место. Главное помнить про уникальность имени 
//свойства и о том, что его значение может быть перезаписано.
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

//№ 3-30 Карточки задач
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line

//  const task = {category, priority, completed};
//  const newTask = {... task, ... data,}
//  return newTask;
//   // Change code above this line
// }


//№ 3-31 Операция rest для сбора всех аргументов функции
//Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию. 
//Синтаксически это близнец операции распыления, но отличить их просто - распыление это когда ...находится в правой части 
//операции присваивания, а сбор это когда ...находится в её левой части.
//Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, 
// считала и возвращала их сумму.
// Change code below this line
// function add(...args) {
// let sum = 0
//   for (let item of args) {
// 	sum += item;
// 	}
// 	return sum;
//   // Change code above this line
// }
// let result = add(74, 11, 62, 46, 12, 36);
// console.log(result);

//# 3-32 Операция rest для сбора части аргументов функции
//Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, 
//чтобы она считала сумму только тех аргументов, которые больше чем заданное число.Это число должно быть 
//первым параметром функции.
// function addOverNum(...args) {
//   let total = 0;

//   for (let item of args) {
//     if (item > args[0]) {
// 		total += item;
// 	}
//   }
//   return total;
// }
// let result = addOverNum (20, 74, 11, 62, 46, 12, 36);
// console.log(result);

//# 3-33 Массив совпадений - 2 варианта решения
//Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, 
//а остальные аргументы будут просто числами.
//Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, 
//начиная со второго, которые есть в массиве первого аргумента.
//вариант 1 - поиск осуществлен по аргументам первого массива
    // function findMatches(numbers, ...args) {
    // const matches = []; // Don't change this line
    // for (let number of numbers) {
    // if (args.includes(number)) {
    //     matches.push(number);
    //     }
    // }
    // // Change code above this line
    // return matches;
    // }

    // let result = findMatches([1, 2, 8, 3, 4, 5, 8], 1, 8, 2, 7) //возвращает [1, 2, 8, 8]
    // console.log(result);
    
//вариант 2 - поиск осуществелн по аргументам вторго массива. Порядок вывода результатов функции от этого меняется.
    // function findMatches(numbers, ...args) {
    // const matches = []; // Don't change this line
    // for (let arg of args) {
    // if (numbers.includes(arg)) {
    //     matches.push(arg);
    //     }
    // }
    // return matches;
    // }
    // let result = findMatches([1, 2, 8, 3, 4, 5, 8], 1, 8, 2, 7) //возвращает [1, 2, 8, 8]
    // console.log(result);


//# 3-34 Методы объекта
//До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных, например информация о книге и т. п. 
//Объекты - хранилища обычно находятся в массиве таких же объектов, который представляет коллекцию однотипных элементов.
//Объекты могут хранить не только данные, но и функции для работы с этими данными - методы. Если значение свойства это 
//функция, такое свойство называется методом объекта.
//Такие объекты можно назвать «моделями». Они связывают данные и методы для работы с этими данными. Например, можно 
//было объявить переменную books и две функции getBooks() и addBook(bookName), но тогда это были бы три независимые 
//сущности без явной синтаксической, и со слабой логической связями.
//Пример "модели" объекта
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//   return `Deleting book ${bookName}`
//   },
//   updateBook (oldName, newName) {
//    return `Updating book ${oldName} to ${newName}` 
//   }
//     // Change code above this line
// };

//№ 3-35 Доступ к свойствам объекта в его методах
//Методы используются для работы со свойствами объекта, их изменения. Для доступа к объекту в методе используется 
//не имя переменной, например bookShelf, а ключевое слово this - контекст.Значением this будет объект перед «точкой», 
//то есть объект который вызвал этот метод, в нашем случае это ссылка на объект bookShelf.
//Для того, чтобы получить доступ к свойствам объекта в методах, мы обращаемся к нему через this и дальше как обычно - 
//«через точку» к свойствам.
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
// 		let indexOfOldBook = this.books.indexOf(oldName);
// 	this.books.splice(indexOfOldBook, 1, newName);
// 	  // Change code above this line
//   },
// };

// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks());

//# 3-36 Лавка зелий «У старой жабы»
//К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения 
//инвентаря - добавления, удаления, поиска и обновления зелий.Добавь объекту atTheOldToad свойство potions, 
//значением которого сделай пустой массив.
// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
// 	addPotion(newPotion) {
// 	this.potions.push(newPotion);
// 	},
// 	removeOldPotion(oldPotion) {
// 	let indexOfOldPotion = this.potions.indexOf(oldPotion);
// 	this.potions.splice(indexOfOldPotion, 1);
// 	},
//   findPotion(potionToFind) {
// 	if (this.potions.includes(potionToFind))
// 	return `The ${potionToFind} is in potions`;
// 	},
// 	renewPotions(oldPoiton, newPotion) {
// 	removeOldPotion(oldPotion);
// 	addPotion(newPotion);
// 	}
//   // Change code above this line
// };

//# 3-38 Получаем все значения массива в объекте
//Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  
//   getPotions() {
//   return this.potions;
//   },
//   // Change code above this line
// };

//# 3-41 Работа с карточками товаров: показать все, добавить новую, удалить, обновить с добавление и удалением
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
    
//   // Change code below this line
// 	//const {potions} = atTheOldToad;
//   getPotions() {
// 	return this.potions;
// },
  
// 	addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }
//     this.potions.push(potionName);
//   },
	
// 	removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1){
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//       }
//     }
// 	  return `Potion ${potionName} is not in inventory!`;
// 	},
	
// 	updatePotionName(oldPotion, newPotion) {
// 	 for (let i = 0; i < this.potions.length; i += 1) {
//       if (oldPotion === this.potions[i].name) {
//         this.potions.splice(i, 1, {name: newPotion.name, price: newPotion.price});
//       }
//     }
//     return `Potion ${oldPotion} is not in inventory!`;
// 	},
//  // Change code above this line
// };

// # 3-41 - вариант решения от коллеги:
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     for(let i=0; i < this.potions.length; i += 1) {
//     	if(this.potions[i].name === potionName) {
//         	this.potions.splice(i, 1)
//         }
//     }
//   },
//  updatePotionName(oldName, newName) {
//     for(let obj of this.potions) {
//     	if(obj.name === oldName) {
//         	obj.name = newName
//         }
//     }
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.getPotions());
// atTheOldToad.removePotion("Trort potion");
// console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName("Speed potion", { name: "Frog potion", price: 350, });
// console.log(atTheOldToad.getPotions());
