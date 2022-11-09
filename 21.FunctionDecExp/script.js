// Функция декларации (Declaration), можно вызывать до объявления функции

function getAge1(birthYear, yearNow) {
   // const age = yearNow - birthYear;
   // return age;
   return yearNow - birthYear;
}

const myAge1 = getAge1(1990, 2022);
console.log(myAge1);

// const myAge1 = getAge1(1990, 2022);
// console.log(myAge1);



// Expression функция, можно вызывать только после обьявления функции

const getAge2 = function (birthYear, yearNow) { // Анонимная функция
   return yearNow - birthYear;
}

const myAge2 = getAge2(1990, 2022);
console.log(myAge2);