"use strict"

const salary = {
    mango: 100,
    joy: 200,
    rod: 150,
}
//получить общую сумму зарплат
// const values = Object.values(salary); //возвращает массив значений зарплат
// console.log("individual salary", values);
// const totalSalary = values.reduce((total, value) => total + value, 0); // если без return, {} не использовать 
// //и initialValue указать сразу после описания функции
// console.log("total salary", totalSalary);
//записываем все в одну строку. Вызвываем метод reduce на результате работы метода Object
//const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0); // если без return, {} не использовать 
//и initialValue указать сразу после описания функции
const totalSalary = Object.values(salary).reduce((total, value) => {
    return total + value
}, 0); // если использавть return, то нужны {} и initialValue указать сразу после описания функции, т.е. после закрывающей } тела функции.
console.log("total salary", totalSalary);
console.log("list of salaries", Object.values(salary));
//=============================================================
const users = [
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
]
// const totalBalance = users.reduce((total, user) =>
//     total + user.balance, 0);
const totalBalance = users.reduce((total, {balance}) =>
    total + balance, 0); //использована деструктуризация св-ва balance
console.log("total users Balance", totalBalance);

// const userIsActive = users.reduce((activeUser, user) => {
//     activeUser = user.filter(users.isActive);
//     return activeUser;
// }, []);
// console.log("active users", userIsActive);

const cart = [
    { label: "Apples", price: 100, quantity: 2 },
    { label: "Orange", price: 200, quantity: 5 },
    { label: "Plum", price: 150, quantity: 3 },
];
//=======================================================
// const totalCost = cart.reduce((total, item) =>
//     total + item.price * item.quantity, 0);
const totalCost = cart.reduce((total, {price, quantity}) =>
    total + price * quantity, 0); //выполнена деструктуризация {price, quantity}, 
//это сокращает дальнейшую запись действия умножения
console.log('total cost in cart', totalCost);
//=======================================================
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const allTags = tweets.reduce((accum, tweet) => {
//     accum.push(tweet.tags)
//     return accum;
// },
//     [],
// );
// const allTags = tweets.reduce((accum, { tags }) =>
// {
//     //accum.push(tags) //получение массива, состоящего из массивов значений
//     // accum.push(...tags) //распыление для получения массива объединенных значений массивов
//     // return accum;

//     return [...accum, ...tags]; //для получения единого массива данных, на каждой итерации (return) распыляем аккумулятор и текущее значение (currentValue),
//     //это позволяет избежать проблем с линтерами - проверялщиками кода js
// },
//     [],
// );
//финальный вариант без return:
const allTags = tweets.reduce((accum, { tags }) => [...accum, ...tags], []);
console.log(allTags);
//========================================================
// const tagsStats = allTags.reduce((accum, tag) => {
//     console.log(accum);

//     if (accum[tag]) { //accum[tag] - accum со свойством tag
//         accum[tag] += 1;
//         return accum;
//     }
//     accum[tag] = 1
//     return accum;
// }, {});
// console.table(tagsStats);
//________переписываем сокращенно и правильно для линтеров
const tagsStats = allTags.reduce((accum, tag) => {
    console.log(accum);

    if (accum[tag]) { //accum[tag] - accum со свойством tag
        //accum[tag] += 1; //ниже через return записано тоже самое
        return {
            ...accum,
            [tag]: accum.tag + 1,
        };
    }
    //accum[tag] = 1 //ниже через return записано тоже самое
    return {
        ...accum,
        [tag]: 1,
    };
}, {});
console.table(tagsStats);