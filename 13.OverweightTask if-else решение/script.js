
// Моё решение

const weight = prompt('Enter your weight in kg');
const height = prompt('Enter your height in meters');

const bodyMassIndex = weight / Math.pow(height, 2);

if (bodyMassIndex < 25) {
   alert('No! Your weight is normal!');
   console.log('No! Your weight is normal!');
} else {
   alert(`YES! You BMI is more than normal by ${bodyMassIndex - 25}!`);
   console.log(`YES! You BMI is more than normal by ${bodyMassIndex - 25}!`);
}
console.log(bodyMassIndex);


// Решение на курсе

const weight = prompt('Enter your weight in kg');
const height = prompt('Enter your height in meters');

const bodyMassIndex = weight / Math.pow(height, 2);
const areYouOverweight = bodyMassIndex >= 25;

if(areYouOverweight){
   console.log(`YES! You BMI is more than normal by ${bodyMassIndex - 25}!`);
   alert(`YES! You BMI is more than normal by ${bodyMassIndex - 25}!`);
} else {
   console.log('No! Your weight is normal!');
   alert('No! Your weight is normal!');
}