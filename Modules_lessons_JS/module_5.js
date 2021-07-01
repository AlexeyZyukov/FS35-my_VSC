"use strict";

//модуль 5 Репета разбор this 
// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log(`changeColor -> this`, this);
//     };
//     return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor("yellow");
// console.log(updateColor);

// const hat = {
//     color: "blue",
//     updateColor,
// };

// console.log(hat.updateColor);
// //updateColor("orange"); - вернет undefined, т.к. нет вызывающего объекта и this не имеет свойства
// hat.updateColor("orange");




// const Car = function ({ brand, model, price } = {}) {
//     //console.log("this is", this);
//     //const {brand, model, price} = config;
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     //console.log("this is", this);
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// const myCar = new Car({
//     brand: "Opel",
//     model: "Astra",
//     price: 15000,
// });

// myCar.changePrice(5000);
// console.log("myCar", myCar);

// const myCar2 = new Car();
// console.log("myCar2", myCar2);

//___________________________________________
// const ProductCard = function ({ productName, itemPrice, quantity } = {}) {
//     this.productName = productName;
//     this.itemPrice = itemPrice;
//     this.quantity = quantity;
// };

//ProductCard.prototype.getPrice = function() {
// 	return this.itemPrice;
// }

// ProductCard.prototype.changePrice = function (newItemPrice) {
//     this.itemPrice = newItemPrice;
// };

// ProductCard.prototype.changeQuantity = function (newQuantity) {
//     this.quantity = newQuantity;
// };

// const myProduct = new ProductCard({ productName: "fork", quantity: 10, itemPrice: 100, })
// console.log(myProduct);

// myProduct.changeQuantity(20);
// console.log(myProduct);

//___________________________________________________________________
//# 1-19 Прототип объекта и метод Object.create()
// const parent = {
//     name: 'Stacey',
//     surname: 'Moore',
//     age: 54,
//     heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

//# 2-19 Цепочка прототипов
// const ancestor = {
//     name: 'Paul',
//     age: 83,
//     surname: 'Dawson',
//     heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// <<<<<<< HEAD
// //<<<<<<< Updated upstream
// =======
// // <<<<<<< Updated upstream
// >>>>>>> fcb7ef7710db3e5ed3d83995ca8caf42c426787e

//функция constructor
// const Car = function ({brand, model, price} = {}) {
//     //message: "I'm a prototype function"
//     console.log("Car is" , {brand, model, price});
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// const myCar1 = new Car({
//     brand: "audi",
//     model: "Q5",
//     price: 35000,
// });
// console.log("myCar1 is", myCar1);

// const myCar2 = new Car({
//     brand: "VW",
//     model: "Polo",
//     price: 15000,
// });
// console.log("myCar2 is", myCar2);

//# 5-19
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function() {
//     return this.price;
// }

// Car.prototype.changePrice = function(newPrice) {
//   this.price = newPrice;
// }

//_______________________________________________________
//# 6-19 Хранилище
// function Storage(items) {
//     this.items = items;
// };

// Storage.prototype.getItems = function() {
//   return this.items;
// };

// Storage.prototype.addItem = function(newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//     let itemsIndex = this.items.indexOf(item);
//     this.items.splice(itemsIndex, 1);
// };


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


//____________________________________________________
// # 7-19 Конструктор строк
// function StringBuilder (baseValue) {
//   this.value = baseValue;
  
// }

// //ниже записаны объявления методов, которые добавляются в вызвваемый объект 
//как ссылки на них. т.е. каждый новый объект имеет достук к основному методу по ссылке
// StringBuilder.prototype.getValue = function (value) {
//     return this.value;
//   }
  
//   StringBuilder.prototype.padEnd = function(str) {
//     this.value = this.value + str;
//   }
  
//   StringBuilder.prototype.padStart = function(str) {
//   this.value = str + this.value;
//   }
  
//   StringBuilder.prototype.padBoth = function(str){
//       this.value = str + this.value + str;
//   }


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

//_____________________________________________________________
//№ 9+10-19 Конструктор класса
// class Car {
//   constructor ({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//     }
   
//  getPrice() {
//     return this.price;
//   }
  
//  changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

//____________________________________________________________
//№ 11-19 Приватные свойства
//Пример, поясняющий учебный материал.
// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// console.log(mango.getEmail());
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// //console.log(mango.#email); // Будет ошибка, это приватное свойство

// //задача для решениия
// //Допустим почта пользователя должна быть недоступна из вне, то есть приватна. Добавляя к 
// //имени свойства символ # мы делаем его приватным.Объявление приватного свойства до инциализации 
// //в конструкторе - обязательно.
// class Car {
//   #brand; //объявление приватного свойства

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//     getBrand() {
//     return this.#brand;
//     }
//     changeBrand(newBrand) {
//     this.#brand = newBrand;
//     }
// }

//____________________________________________________________
//№ 12-19 Хранилище 2.0
// class Storage {
//   #items

// constructor(items) {
//     this.#items = items;
// }

// getItems () {
//   return this.#items;
// };

// addItem (newItem) {
//   this.#items.push(newItem);
// };

// removeItem (item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// }
// };

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//____________________________________________________________
//# 13-19 Конструктор строк 2.0
//Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, 
//чтобы свойство value было приватным.
// class StringBuilder {
//   #value;

//   constructor(baseValue) {
//   this.#value = baseValue;
//   }

// getValue() {
//   return this.#value;
// };

// padEnd(str) {
//   this.#value += str;
// };

// padStart(str) {
//   this.#value = str + this.#value;
// };

// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// }
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

//____________________________________________________________
//# 14-19 Геттеры и сеттеры
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

//____________________________________________________________
//# 15-19 Статические св-ва
//Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные 
//свойства, доступные только классу, но не его экземплярам - статические свойства(static).
//Они полезны для хранения информации относящейся к самому классу.
//ниже - пример из конспекта
// class User {
//   // Объявление и инициализация статического свойства
//   static TYPES = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   #email;
//   #type;

//   constructor({ email, type }) {
//     this.#email = email;
//     this.#type = type;
//   }

//   get type() {
//     return this.#type;
//   }

//   set type(newType) {
//     if (User.TYPES[newType] === undefined) {
//       console.log('Ошибка! Такого типа пользователя не существет');
//       return;
//     }

//     this.#type = newType;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   type: User.TYPES.ADMIN,
// });

// console.log(mango.TYPES); // undefined
// console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

// console.log(mango.type); // admin
// mango.type = User.TYPES.EDITOR;
// console.log(mango.type); // editor

//ниже - задание урока 15 для решения
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) //обращение к статическому св-ву класса 
//     //производится по имени класса
//     {
//       this.#price = newPrice;
//       return this.#price;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//____________________________________________________________
//№ 16-19 Статические методы
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Внимание! Цена превышает допустимую."
//     }
//     return "Всё хорошо, цена в порядке."
//   };
// <<<<<<< HEAD

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
//=======
//# 5-19
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// =======
// >>>>>>> fcb7ef7710db3e5ed3d83995ca8caf42c426787e

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
//=======
//____________________________________________________________
//#17-19 Наследование классов
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки

// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' }; //добавляет публичное статическо св-во
// };

//ниже пример из учебника JS_online использование class
// class Clock {
//     constructor({ template }) {
//       this.template = template;
//     }
//     //let timer;
  
//     render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     stop() {
//       clearInterval(this.timer);
//     };
  
//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     };
  
//   }
  
//   let clock = new Clock({template: 'h:m:s'});
// clock.start();
// clock.stop();


//№ 18-19 Конструктор дочернего класса
//Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию 
//super(аргументы) - это псевдоним конструктора родительского класса.В противном случае, 
//при попытке обратиться к this в конструкторе дочернего клаcса, будет ошибка.При вызове 
//конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// <<<<<<< HEAD
//____________________________________________________
//# 7-19 Конструктор строк
//  function StringBuilder(baseValue) {
//     this.value = baseValue
// }
// StringBuilder.prototype.getValue = function () {
//     return this.value;
// }
// StringBuilder.prototype.padEnd = function (str) {
//     this.value += str;
// }
// StringBuilder.prototype.padStart = function (str) {
//     this.value = str + this.value;
// }
// StringBuilder.prototype.padBoth = function (str) {
//     this.value = str + this.value + str;
// }


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='
// >>>>>>> Stashed changes
// =======
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   accessLevel;
  
//   constructor({ email, accessLevel }) //constructor принимает объект {}
//   {
//   super(email);
//     this.accessLevel = accessLevel;  
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

//# 19-19 Методы дочернего класса
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
    
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
//   blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//     blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
  
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email); //includes возвращает true или false в ависимости от результата проверки
//     //оператор if - не нужен
//     // if (this.blacklistedEmails.includes(email)) {
//     //   return true;
//     // }
//     // return false;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 
// >>>>>>> fcb7ef7710db3e5ed3d83995ca8caf42c426787e
