let result;
const firstName = "Jack";
const lastName = "Brown";
const space = " ";
const age = 25;
const greeting = "Hey there!";

// Concatenation

result = "Jack";
result = "Jack" + " " + "Brown"; // Конкотенация строк
result = firstName + space + lastName; // Конкотенация строк
result =
   greeting +
   space +
   "My name is" +
   space +
   firstName +
   " " +
   lastName +
   ". I'm " +
   age +
   " years old.";

// Escaping (экранирование)

result = "I'm 34 years old"; // \ перед ковычкой - экранирование
result = 'I like "Star wars" movie'; // \ - перед каждой двойной ковычкой

// Properties and methods

result = "Hello! ".length; // .length - свойство длинна строки
result = firstName.length; // длинна строки в переменной

// concat()

result = firstName.concat(" ", lastName); // метод .concat() конкотенация строк
result = greeting.concat(space, "My name is ", firstName, space, lastName); // можно миксовать конкотенацию через переменные и строки

// toUpperCase()

result = result.toUpperCase(); // метод .toLocaleUpperCase() делает все буквы заглавными
result = result.toLowerCase(); // делает все буквы маленькими

// index

result = firstName[1]; // выводит первую букву из массива слова Jack - J

result = "Hello".indexOf("e"); // выводит порядковый номер(индекс) буквы е - 1 (отсчет с 0)
result = "Hello lol".lastIndexOf("l"); // выводит порядковый номер последней буквы l в строке - 8
result = firstName.indexOf("a"); // выводит порядковый номер в переменной
result = "Hello lol".indexOf("lo"); // выводит порядковый номер последовательности символов 'lo'
result = firstName.indexOf("z"); // если указать символ которого нет в строке выводит -1

// charAt()

result = firstName.charAt(1); // .charAt(1) позволяет узнать, какой символ находиться на 1 позиции в переменной firstName

const longString = "Hi, i'm a long string";
result = longString.charAt(longString.length - 1); // таким способом можно вывести последний символ строки - буква g

// substring()

result = greeting.substring(4, 9); // метод извлекает часть текста из переменной(Hey there!), начиная после 4 символа по 9ый включительно (тоесть с 5 по 9)

// slice()

result = greeting.slice(4, 9); // идентично методу substring выводит порядковые номера из массива с 5 по 9
result = greeting.slice(-6); // извлекает последние 6 символов
result = greeting.slice(0, -3); // удаляет последние 3 символа

// split()

result = longString.split(" "); // Разделяет текст на массив из 5и элементов, пробел ' ' выступает в качестве разделителя (5) ['Hi,', "i'm", 'a', 'long', 'string'] каждое слово будет элементом массива

const colors = "red, orange, green, blue";
result = colors.split(","); // преобразует текст из переменной в массив цветов разделитель ','
result = colors.split(',').length - 1 // делим строку colors по запятой ',', вычисляем длинну получившейся строкиБ получаем 4 цвета и отнимаем 1 чтобы получить колличество запятых

// replace()

result = colors.replace("blue", "yellow"); // метод заменяет в строке цвет 'blue' на 'yellow'

// includes()

result = colors.includes("blue"); // возвращает true тк 'blue' есть в стрке
result = colors.includes("yellow"); // возвращает falce тк 'yellow' нет в строке

console.log(result);
