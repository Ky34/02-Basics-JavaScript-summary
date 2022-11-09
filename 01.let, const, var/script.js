// let name = 'Jack';
// console.log(name);
// name = 'Jane';
// console.log(name);
// let color;
// console.log(color);
// color = 'red';
// console.log(color);

// JavaScript variables names can include
// letters, numbers, $, _
// JavaScript variables names can't start with number

// myMainColor = 'green'; //camel case
//my_main_color // snake case
//my-main-color // kebab case
// MyMainCase // Pascal case

const name = ('Jack');
console.log(name);
// name = 'Jane';

const color = ('red');
console.log(color);

const user = {
   name: 'Jack',
   gender: 'male',
   age: '32'
}

console.log(user); //можно изменять свойства и данные внутри обьекта!

user.name = 'Jane';
user.gender = 'female';

console.log(user);

// user = {    // нельзя прсваивать этой переменной новый объект!
//    name: 'Jane',
//    gender: 'male',
//    age: '32'
// }

const colors = ['red', 'orange', 'green'];
console.log(colors);

colors.push('blue'); //можно менять значения внутри массива (.push - добавляет значение в конец массива)
console.log(colors);

colors = ['red', 'orange', 'green'] //нельзя присвоить новый массив