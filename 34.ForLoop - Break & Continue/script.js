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

// for(let rep = 1; rep <= 10; rep += 2) {
//    console.log(`Push ups repetition ${rep}`);
//    console.log('Hello!')
// }

// console.log('Out of loop');

// const user123 = ['Aleksei', 'Kozlov', 1990, 'developer', ['Dims', 'Ales'], false];

// const types = [];

// for(let i = 0; i < user123.length; i++) {
//    console.log(user123[i], typeof user123[i]);

//    // types[i] = typeof user123[i];
//    // types.push(typeof user123[i]);
//    types.unshift(typeof user123[i]);
// }

// console.log(types);

// const birthYears = [1974, 1994, 2000, 2003];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//    ages.push(2021 - birthYears[i]);
// }

// console.log(ages);




// continue  &  break

const user123 = ['Aleksei', 'Kozlov', 1990, 'developer', ['Dims', 'Ales'], false];

console.log('CONTINUE EXAMPLE');

for(let i = 0; i < user123.length; i++) {
   if (typeof user123[i] !== 'string') continue; // выходит из текущей итерации цикла и не выводит элемент если его тип не строка (выводим только строки)

   console.log(user123[i], typeof user123[i]); // если элемент не строка, эта часть пропускается и цикла переходит к следующей итерации
}

console.log('BREAK EXAMPLE');

for(let i = 0; i < user123.length; i++) {
   if (typeof user123[i] === 'number') break; // елси элемент массива число break прерывает цикл

   console.log(user123[i], typeof user123[i]); 
}
