alekseiObject = { 
   name: 'Aleksei', 
   lastname: 'Kozlov', 
   birthYear: 1990, 
   job: 'programming engineer', 
   friends: ['Dima', 'Ales', 'Korney'],
   hasDriverLicense: true,

   calcAge: function(birthYear) {   // функция в объекте создает свойство calcAge 
      return 2022 - birthYear;
   }
   calcAge: function () {   
      console.log(this); // this - обращение к текущему объекту
      return 2022 - this.birthYear; // this.свойство - обращение к свойству в текущем объекте (ссылка на объкт)
   }

   calcAge: function () {   
      // console.log(this);
      this.age = 2022 - this.birthYear;  // что бы добавить свойство в обьект через функцию с помощью this нужно хотя бы раз вызвать эту функцию
      return this.age
   },

   getSummary: function () {
      return `${this.name} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`
   }

};

// console.log(alekseiObject)


// console.log(alekseiObject.calcAge());

// // console.log(alekseiObject['calcAge'](1990));

// console.log(alekseiObject.calcAge());
// console.log(alekseiObject.calcAge());

// alekseiObject.calcAge();
// console.log(alekseiObject.age)




// Challenge
// 'Aleksei is a 32 year old programming engineer and he has a/no driver license'


// alekseiObject.calcAge();

// console.log(`${alekseiObject.name} is a ${alekseiObject.age}-year od ${alekseiObject.job} and he has ${alekseiObject.hasDriverLicense ? 'a' : 'no'} driver license`); // Решение с тернарным оператором

console.log(alekseiObject.getSummary())