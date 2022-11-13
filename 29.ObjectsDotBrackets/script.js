'strict'

// myData = ['Aleksei', 'Kozlov', 1974, 'programming engineer', ['Dima', 'Ales']];

// console.log(myData[4]);

alekseiObject = { 
   name: 'Aleksei', 
   lastname: 'Kozlov', 
   birthYear: 1990, 
   job: 'programming engineer', 
   friends: ['Dima', 'Ales']
};

// console.log(alekseiObject);

console.log(alekseiObject.name);  // вызов значения из объекта с помощью точки . : имя обьекта.ключ(свойство)
console.log(alekseiObject['name']); // вызов значения из объекта с помощью [] : имя объекта ['ключ(свойство) в форме строки']

const baseName = 'name';
console.log(alekseiObject['last' + baseName]); // можно обратиться к свойству объекта при помощи выражения

// const userInput = prompt('What do you want to know about Aleksei? Choose between name, lastname, birthYear, job, friends');

// if(alekseiObject[userInput]) {  // true
//    console.log(alekseiObject[userInput]);
// } else {  // false
//    console.log('This property does not exist!Choose between name, lastname, birthYear, job, friends');
// }


// Create new properties
alekseiObject.location = 'Belarus'; // добавляет новое свойство location в обьект со значением 'Belarus'
alekseiObject['telegram'] = '@lKy3al'; // добавляет новое свойство telegram в обьект со значением '@lKy3al', так же можно добавлять через переменные
console.log(alekseiObject);


// Challenge
// 'Aleksei has 2 frinds and the first one is Dima'

// решение с переменными
const name = alekseiObject.name;
const totalFriends = alekseiObject.friends.length;
const firstFriend = alekseiObject.friends[0];
console.log(`${name} has ${totalFriends} friends and the first one is ${firstFriend}`);

// решение в одну строку
console.log(`${alekseiObject.name} has ${alekseiObject.friends.length} friends and the first one is ${alekseiObject.friends[0]}`);



console.log(`${alekseiObject.name} has ${alekseiObject.friends.length} friends and the first one is ${alekseiObject.friends[0]}`);

// console.log(name);
// console.log(firstFriend);
// console.log(totalFriends);


