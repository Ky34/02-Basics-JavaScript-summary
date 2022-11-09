// Don't Repeat Yourself - DRY

// Functions

function printText() {  // Обьявляем функцию
   console.log('Hello to everyone!'); // Тело функции
}

printText();  // Вызов функции
printText();
printText();

console.log(); // Встроенная в JavaScript функция

const number = Number('79');  // Встроенная в JavaScript функция Number() для конвертации строки в число
console.log(number);

function colorizer(item, color, colorCode) { // в скобках указывают параметры(аргументы), которые будут определены когда производится вызов функции
   // console.log(item, color);
   const colorizedItem = `The ${item} is ${color}. The code of the color is ${colorCode}`;
   // console.log(colorizedItem);
   return colorizedItem;
}
colorizer('desk', 'red', 99);  // при вызове функции указываем параметры(аргументы) и получаем значения

const messageFromColorizer = colorizer('desk', 'red', 99);
console.log(`We have the following message: ${messageFromColorizer}`);

const messageFromColorizer2 = colorizer('hand', 'green', 10);
console.log(`We have the following message: ${messageFromColorizer2}`);
