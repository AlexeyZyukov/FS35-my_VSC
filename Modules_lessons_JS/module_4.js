"use strict";

// // # 4-3 Инлайн-колбэки. Callback функция описана и вызывается в самой функции высшего порядка
// function makePizza(pizzaName, callback) {
//   //console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//     console.log(`Доставляем пиццу ${pizzaName}.`);
//     //console.log(deliverPizza);
// });
// // Пиши код ниже этой строки
// makePizza('Ультрасыр', function eatPizza(pizzaName) { console.log(`Едим пиццу ${pizzaName}`) });



// # 4-10 Несколько колбэков. Callback описаны в отдельных функциях
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//         return onSuccess(pizzaName);
//         }
//         return onError(`${pizzaName}.`);
//     }
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка!  В ассортименте нет пиццы с названием ${error}`;
// }

// // Вызовы метода с колбэками
// //pizzaPalace.order();
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));


//№ 5-10
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

//№ 6-10 Аккаунт пользователя. Выполни рефакторинг методов объекта customer, 
//расставив отсутствующие this при обращении к свойствам объекта.
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


//# 7-10 Метод call
//пример из учебника:
// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);

// }

// const mango = { username: "Манго" };
// const poly = { username: "Поли" };


// greetGuest.call(mango, "Добро пожаловать");
// // Добро пожаловать, Манго.

// greetGuest.call(poly, "С приездом");
// С приездом, Поли.


//задание для решения
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// //   { email: 'jacob@gmail.com', dish: 'Meal' },
// ];

// // Пиши код ниже этой строки
// //вариант 1 - рабочий!
// function composeMessage(position){
//    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// }
// const messages = [];

//     for (let i = 0; i < orders.length; i += 1) {

//         let result = composeMessage.call(orders[i], i + 1);
//         console.log(result)
//         messages.push(result);
//     }
//     console.log(messages);

//вариант 2 - тестовый
// let messageResult;
// const messages = [];
// function composeMessage(position) {
//         messageResult = (`Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`);
//         console.log(messageResult);        
// };

// for (let i = 0; i < orders.length; i += 1) {
//     composeMessage.call(orders[i], i + 1);
//     messages.push(messageResult)
// }

// console.log(messages);


//№ 8-10 Метод apply
// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }
// console.log(messages);

//# 9-10 Метод bind
//Метод bind создаёт и возвращает копию функции foo с привязанным контекстом obj и аргументами arg1, 
//arg2 и т.д.Получается копия функции которую можно передать куда угодно и вызвать когда угодно.
// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

//# 10-10 Метод bind и методы объекта
//При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на 
//метод, которая присваивается как значение параметра, вызываемого без объекта.
//Метод bind используется для привязки контекста при передаче методов объекта как колбэк-функций. 
//Передадим колбэком не оригинальный метод getFullName, а его копию с привязанным контекстом к объекту customer.
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

