// Conversion to string

// String()
let x = String(1112); //вызов функции String
x = String(2 + 2);
x = String(false);
x = String(new Date()); //выводит в консоль дату, преобразует ее в строку и подсчитывает колличество символов
x = String(['one', 'two', 'three']);

// toString()

x = (35).toString();
x = (true).toString();

console.log(x);
console.log(typeof x);
console.log(x.length); //Длинна строки

// Conversion to nubmer

// Number()
let y = Number('5.1234567'); //добавляем метод Number чтобы получить число из строкового типа данных
y = Number(false); // true = 1   false = 0
y = Number(null); // null = 0
y = Number('text'); // выводит NaN - not a number (не число)
y = Number([1, 2, 3]);  // выводит - NaN

// parseInt()

y = parseInt('123.23'); // распознает только целое число
y = parseFloat('123.23')  // распознает любое число

console.log(y);
console.log(typeof y);
console.log(y.toPrecision()); // toPrecision() - метод в котором можно указать колличество знаков в числе, которое выводить

//

const x = '5';
const y = '3';
const z = x + y;   // Конкотенация срок выводит 53

console.log(z);
console.log(typeof z);

// Неявное приведение типов (примеры)

const x = 5;
const y = '3';
const z = x - y;   // JS преобразует строку '3' в число отнимает 5 - 3 и выводит 2 с типом number

console.log(z);
console.log(typeof z)



const x = true;
const y = '3';
const z = x + y;   // JS преобразует булевое значение true в строку и делает конкотенацию выводит true3 с типом string

console.log(z);
console.log(typeof z)