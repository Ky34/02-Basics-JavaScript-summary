const brand = 'Toyota';
const model = 'Camry';
const color = 'grey';
const year = '2019';

let carHtml;

// Old approach(befor ES6) - старый подход до ES 6

carHtml = '<h3>' + 'Car Description' + '</h3>' + 
'<ul>' + 
'<li>Brand:' + brand + '</li>' +
'<li>Model:' + model + '</li>' +
'<li>Color:' + color + '</li>' +
'<li>Year:' + year + '</li>' +
'</ul>';


// New approach (template literals or template strings) новый подход (шаблонные строки)

carHtml = `
   <h3>Car Description</h3>
   <ul>
      <li>Brand: ${brand}</li>
      <li>Model: ${model}</li>
      <li>Color: ${color}</li>
      <li>Year: ${year}</li>
      <li>Year: ${2010+7}</li>
      <li>Doors: ${getDoorsNumber()}</li>
      <li>Tax: ${year < 2000 ? '20%' : '10%'}</li>
`
// `` - в обратных ковычках размещаем обычный html код, ${} - казываем в фигурных скобкох переменные, вычисления, функции, тернарные операторы которые хотим отобразить

function getDoorsNumber() {
   return 5;
}



document.body.innerHTML = carHtml;