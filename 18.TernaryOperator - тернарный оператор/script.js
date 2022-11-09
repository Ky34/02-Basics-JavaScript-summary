// Тернарный или условный оператор, передает значение

const money = 100;
const cost = 110;

// Конструкция:  if... ? ... : else ... 
// money >= cost ? console.log('You can buy it.') : console.log('You can not buy it.');


// Запись с помощью тернарного оператора
const canYouBuyIt = money >= cost ? 'You can buy it.' : 'You can not buy it.';

console.log(canYouBuyIt);


// Запись с помощью If Else Statement
let canYouBuyIt1;
if(money >= cost){
   canYouBuyIt1 = 'You can buy it.';
} else {
   canYouBuyIt1 = 'You can not buy it.';
}
console.log(canYouBuyIt1);

// Запись с помощью тернарного оператора сразу в консоль
console.log(`You can${money >= cost ? '' : ' not'} buy it.`);