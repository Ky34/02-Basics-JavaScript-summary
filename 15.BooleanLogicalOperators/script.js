// AND, OR, NOT

// AND &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

// OR ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

// NOT !
console.log(!true); //  false
console.log(!false); //  true

console.log("");

//  Use AND

const hasMoney = true;
const isAdult = true;

if (hasMoney && isAdult) {
   console.log("You can buy the drink");
} else {
   console.log("You can not buy the drink");
}

// Use OR

const hasMoney = false;
const isWithParent = false;

if (hasMoney || isWithParent) {
   console.log("You can buy the orange");
} else {
   console.log("You can not buy the orange");
}

// Use NOT

const hasMoney = true;
const isAdult = true;
const isCompletelyDrunk = false;

// console.log(!isAdult);

if (hasMoney && isAdult && !isCompletelyDrunk) {
   console.log("You can buy the drink");
} else {
   console.log("You can not buy the drink");
}
