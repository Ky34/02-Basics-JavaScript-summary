// const age = 18;
// const isAdult = age >= 18;

// if(isAdult) {  // запускает первую часть кода если переменная = true
//    console.log('You can watch this video');
// }


// const age = 14;

// if(age >= 18) {  // запускает первую часть кода если переменная = true
//    console.log('You can watch this video');
// } else {
//    // console.log('You can not watch this video');
//    const yearsLeft = 18 - age;
//    console.log(`You are too young. You can watch this video ${yearsLeft} years later`);
// }

const birthYear = 2010;
const yearNow = 2020;
const age = yearNow - birthYear;

let answer;

if(age >= 16) {
   answer = 'Yes'
} else {
   answer = 'No'
}

console.log(`Am I adult? - ${answer}`);

// Множественные условия

const color = 'orange';

if (color === 'green') {
   console.log('GO!')
} else if (color === 'yellow') {
   console.log('get rdy')
} else if (color === 'red') {
   console.log('STOP!')
} else {
   console.log('Incorrect color!')
}

