const color1 = 'red';
const color2 = 'orange';
const color3 = 'yellow';
const color4 = 'green';
const color5 = 'blue';
const color6 = 'indigo';
const color7 = 'violet';

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(rainbowColors[1]); // выводит цвет под порядковым номером 1 (отсчет начинается с 0)
console.log('The sky is ' + rainbowColors[4]);

rainbowColors[5] = 'dark blue'; // заменяет элемент массива под порядковым номером 5 на новый
rainbowColors[rainbowColors.length] = 'indigo'; //добавляет новый элемен в конец массива

console.log(rainbowColors); // выводите все элементы массива

// const stringNumbers = []; // можно создавать пустой массив и после добавлять в него элементы
// stringNumbers[0] = 'one';
// stringNumbers[1] = 'two';
// stringNumbers[2] = 'three';

const stringNumbers = new Array('one', 'two', 'three'); // альтернативный способ создания массива

console.log(stringNumbers);

const numbers = [34, 5, 32, 67]; // в JS массивы могут содержать элементы разных типов
console.log(numbers);


const anyItems = [4, true, new Date(), 'something']; // в одном массиве могут быть элементы разных типов (число, булевое значение, обьект, строка итд)
console.log(anyItems)
