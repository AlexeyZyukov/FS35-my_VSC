"use strict";

//Репета разбор this - модуль 5
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
// updateColor("orange");




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

// const ProductCard = function ({ productName, piecePrice, quantity } = {}) {
//     this.productName = productName;
//     this.piecePrice = piecePrice;
//     this.quantity = quantity;
// };

// ProductCard.prototype.changePrice = function (newpiecePrice) {
//     this.piecePrice = newpiecePrice;
// };

// ProductCard.prototype.changeQuantity = function (newQuantity) {
//     this.quantity = newQuantity;
// };

// const myProduct = new ProductCard({ productName: "fork", quantity: 10, piecePrice: 100, })
// console.log(myProduct);

// myProduct.changeQuantity(20);
// console.log(myProduct);

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

const Car = function () {
    message: "I'm prototype function"
    console.log(this);
}