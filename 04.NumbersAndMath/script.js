const firstNumber = 50;
const secondNumber = 3;
let result;

// Simpl math operations
result = firstNumber + secondNumber;
result = firstNumber - secondNumber;
result = firstNumber * secondNumber;
result = firstNumber / secondNumber;
result = firstNumber % secondNumber; // остаток от деления

// Math object
result = Math.PI; // выводит число PI
result = Math.round(3.8); // метод округление
result = Math.ceil(3.3); // метод принудительное округдение в большую сторону будет 4
result = Math.floor(3.8); // метод принудительное округдение в меньшую сторону будет 3
result = Math.sqrt(9); // метод квадратный корень
result = Math.abs(-7); // метод обсалютное число, без знака выводит 7
result = Math.pow(2, 3); // метод возведения в степень где 2 - основание, 3 - степень
result = Math.min(45, 6, -11, 32); // метод выводит минимальное число из последовательности
result = Math.max(45, 33, 22, 414); // метод выводит максимально число из последовательности

result = Math.random(); // метод выводит случайное значение от 0 включительно до 1 не включая ее
result = Math.random() * 100; // метод выводит случайное значение от 0 до 100
result = Math.floor(Math.random() * 100); // метод выводит целые числа от 1 до 99 если прибавить 1 то будет выводить от 1 до 100

console.log(result);
