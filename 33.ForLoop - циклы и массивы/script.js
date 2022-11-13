// console.log('Push ups repetition 1');
// console.log('Push ups repetition 2');
// console.log('Push ups repetition 3');
// console.log('Push ups repetition 4');
// console.log('Push ups repetition 5');
// console.log('Push ups repetition 6');
// console.log('Push ups repetition 7');
// console.log('Push ups repetition 8');
// console.log('Push ups repetition 9');
// console.log('Push ups repetition 10');


// ключевое слово for (инициализируем переменную-счетчик ; проверяется условие выхода из цикла ; изменение счетчика ){тело цикла}

// Как работает цикл: инициализируется переменная-счетчик, проводится проверка усливия, выполняется тело цикла, изменяется значение счетчика

// for (let rep = 1; rep <= 10 ; rep += 2) {  // присваиваем переменной кооличество повторений, поторяем от 1 до 10 включительно увеличивая переменную каждый раз на 2
//    console.log(`Push ups repetition ${rep}`); // Изменяет значения в строке соответственно каждому циклу от 1 до 10
//    console.log('Hello');
// }

// console.log('Out of loop');


const user123 = ['Aleksei', 'Kozlov', 1990, 'developer', ['Dims', 'Ales'], false];

const types = [];  // для переноса данных из цикла в новый массив создаем пустой массив


for (let i = 0; i < user123.length; i++) {  // i - традиционное название переменной-счетчика, user123.length - выводим все элементы массива
   console.log(user123[i], typeof user123[i]);  // выводим элементы массива по индексу i, и тип каждого элемента
   types[i] = typeof user123[i];  // вычисляем тип каждого элемента из массива user123 и добавляем их в пустой массив types
   types.push(typeof user123[i]); // добавляет элементы в конец массива
   types.unshift(typeof user123[i]); // добавляет элементы в начало массива, получаем в обратном порядке
}

console.log(types);


// ----------------------------------------------------------------------------------------

const birthYears = [1974, 1994, 2000, 2003];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
   ages.push(2022 - birthYears[i])
}
console.log(ages)
