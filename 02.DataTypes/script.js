// let x = 'something';
// console.log(x);
// x = 3;
// console.log(x); //можно хранить любые типы данных и изменять их

// Primitive data types

// String

const someText = 'Some test';
console.log(typeof someText); //typeof - выводит в консоль тип данных, которые хранятся в переменной

// Nubmer

const someNumber = 11;
console.log(typeof someNumber);

// Boolean

const someBoolean = false; // Имеет только 2 значения true или false
console.log(typeof someBoolean);

// Null

const someNull = null;
console.log(typeof someNull);

// Undefined 

let someUndefined ;  //const - выдаст ошибку, так как мы должны инициализировать переменную сразу
console.log(typeof someUndefined);

// Symbols

const someSymbol = Symbol();
console.log(typeof someSymbol);

//Reference data types - objects

const someArray = [1, 2, 3, 4]; 
console.log(typeof someArray); //Ссылочные типы данных возвращают объект

// Object Literal

const someObjectLiteral = 
{
   firstProperty: 12,
   secondProperty: 'secondProperty'
}; 
console.log(typeof someObjectLiteral);

// Function

const someFunction = new Function();  // Возвращается тип function
console.log(typeof someFunction);

// Date

const someDate = new Date(); 
console.log(typeof someDate);