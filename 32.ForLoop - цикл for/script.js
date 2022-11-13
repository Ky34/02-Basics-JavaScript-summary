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

for (let rep = 1; rep <= 10 ; rep += 2) {  // присваиваем переменной кооличество повторений, поторяем от 1 до 10 включительно увеличивая переменную каждый раз на 2
   console.log(`Push ups repetition ${rep}`); // Изменяет значения в строке соответственно каждому циклу от 1 до 10
   console.log('Hello');
}

console.log('Out of loop');