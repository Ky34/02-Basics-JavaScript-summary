// const x = (2 + 10) / 2;
// console.log(x);
// const y = 10 - x > 10;
// console.log(y)

let x, y;

console.log(x, y);

x = y = 10 + 5 - 3 * 4; // в первую очередь производяться вычислиния (10 + 5 - 3 * 4 = 3), после этого Y-ку присваевается 3, после этого X-у присваивается Y = 3
console.log(x, y);

// Таблица приоритета операторов https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence