// Let's go back to the BMI index! This time, we'll use objects to do the calculations!
// BMI = weight / height ** 2 = weight / (height * height) (weight in kg and height in meters)
// Your task:
// We have two friends - Jack and Mike
// 1. For each of them, create an object with properties of its first name, last name, weight and height (Jack White and Mike Black).
// 2. Create a BMI calculation method for each object to calculate BMI (same method for both objects). Store the BMI value in a property and also return it from the method.
// 3. Log into the console who has the higher BMI, also the full name and the corresponding BMI. Example: "Jack White BMI (25.7) is higher than Mike Black (22.4)!"
// Test Data: Jack weight 79 kg, height 1.70 m. Mike weighs 91 kg and his height is 1.93 m.
// Happy coding!



// МОЁ РЕШЕНИЕ ЗАДАНИЯ
jackObject = {
   name: 'Jack',
   lastname: 'White',
   weight: 79,
   height: 1.70,
   bmi: function () {
      return (this.weight / this.height ** 2).toFixed(1);
   },
}
console.log(jackObject.bmi())


mikeObject = {
   name: 'Mike',
   lastname: 'Black',
   weight: 91,
   height: 1.93,
   bmi: function () {
      return (this.weight / this.height ** 2).toFixed(1);
   }
}
// console.log(mikeObject.bmi())

const jackBmi = jackObject.bmi();
const mikeBmi = mikeObject.bmi();

if (jackObject.bmi() > mikeObject.bmi()) {
   console.log(`${jackObject.name} ${jackObject.lastname} BMI (${jackBmi}) is higher than ${mikeObject.name} ${mikeObject.lastname} BMI(${mikeBmi})!`);
} else if (jackObject.bmi() < mikeObject.bmi()){
   console.log(`${mikeObject.name} ${mikeObject.lastname} BMI (${mikeBmi}) is higher than ${jackObject.name} ${jackObject.lastname} BMI(${jackBmi})!`);
} else {
   console.log('BMI SAME');
}





// РЕШЕНИЕ НА КУРСЕ

const jackObject = {
   name: 'Jack',
   lastname: 'White',
   weight: 91,
   height: 1.93,
   calcBmi: function () {   // Делаем функцию для расчета BMI
      this.bmi = this.weight / this.height ** 2;  // Создаем новое свойство в обьекте
      return this.bmi;
   },
};

const mikeObject = {
   name: 'Mike',
   lastname: 'Black',
   weight: 91,
   height: 1.93,
   calcBmi: function () {  // Делаем функцию для расчета BMI
      this.bmi = this.weight / this.height ** 2;  // Создаем новое свойство в обьекте
      return this.bmi
   },
};




// console.log(jackObject)
console.log(jackObject.calcBmi());
console.log(jackObject.bmi);

console.log(mikeObject.calcBmi());
console.log(mikeObject.bmi);

if (jackObject.bmi > mikeObject.bmi) {
   console.log(`${jackObject.name} ${jackObject.lastname} BMI(${jackObject.bmi}) is higher than ${mikeObject.name} ${mikeObject.lastname} BMI(${mikeObject.bmi})!`);
} else if (jackObject.bmi < mikeObject.bmi) {
   console.log(`${mikeObject.name} ${mikeObject.lastname} BMI(${mikeObject.bmi}) is higher than ${jackObject.name} ${jackObject.lastname} BMI(${jackObject.bmi})!`);
} else {
   console.log(`${mikeObject.name} ${mikeObject.lastname} and ${jackObject.name} ${jackObject.lastname} BMI are equal (${jackObject.bmi})!`);
}