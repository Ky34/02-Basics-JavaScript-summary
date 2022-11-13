let x = 5;
let y = 3;

x += 7 // x = x + 5;
x -= 2; // x = x - 2;
x *= 3; // x = x * 3;
x /= 2; // x = x / 2;

x++ // x += 1 увеличивает значение х на 1: постфиксная форма записи инкримента
x-- // x -= 1 уменьшает значение x на 1

++x // префиксная форма записи инкремента

y = x++;  // сначала происходит присваивание Y = X, а после увеличение X на 1
y = ++x;  // сначала происходит увеличение X на 1, а после присваивание X = Y

console.log(x);
console.log(y);