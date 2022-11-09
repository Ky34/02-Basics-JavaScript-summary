// Expression function

// Анонимная функция
const getAge2 = function (birthYear, yearNow) {
   return yearNow - birthYear;
};

const myAge2 = getAge2(1990, 2022);
console.log(myAge2);

// Стрелочная функция,

const getAge3 = (birthYear, yearNow) => yearNow - birthYear; // (параметры(аргументы) через запятую) => указываем значение, которое возращает функция

const myAge3 = getAge3(1990, 2022);
console.log(myAge3);

const canBuyAlcohol = (birthYear, yearNow) => {
   const age = yearNow - birthYear;
   const isPersonOlderThan21 = age >= 21 ? true : false;
   return isPersonOlderThan21;
};

console.log(canBuyAlcohol(1990, 2022));
