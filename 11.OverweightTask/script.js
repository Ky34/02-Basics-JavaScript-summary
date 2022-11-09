
// Моё решение задачи

const weight = prompt('Enter your weight in kg');
const height = prompt('Enter your height in meters');
const result = (weight / Math.pow(height, 2)) >= 25;

alert('Are you overweight? ' + result);




// Решение задачи на курсе - лучше

const weight = prompt('Enter your weight in kg');
const height = prompt('Enter your height in meters');

const bodyMassIndex = weight / Math.pow(height, 2);
const areYouOverweight = bodyMassIndex >= 25;

alert('Are you overweight? ' + areYouOverweight);



// Для проверки значений

// console.log(bodyMassIndex);
// console.log(areYouOverweight);