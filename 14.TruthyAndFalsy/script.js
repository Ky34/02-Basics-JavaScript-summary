// Javaccript palsy values:
// 0, '', undefined, null, NaN - все эти значения будут сконвертированы в false. Все остальные будут сконвертированны в true

// Получаем false
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));


// Получаем true
console.log(Boolean(32));
console.log(Boolean('hello'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(3.5));


const age = 0;

if(age) {  // Неявное приведение типов (0 - false)  
   console.log('The person was born');
} else {
   console.log('The person was not born yet')
}

let weight;

if(weight) {
   console.log('Weight in defined')
} else {
   console.log('Weight is not defined')
}