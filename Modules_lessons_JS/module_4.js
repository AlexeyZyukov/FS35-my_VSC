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
const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i++) {
  const msg = composeMessage.apply(orders[i], [i + 1]);
  messages.push(msg);
}
console.log(messages);
