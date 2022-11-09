
// if (color === 'green') {
//    console.log('GO!');
// } else if (color === 'yellow') {
//    console.log('get rdy');
// } else if (color === 'red') {
//    console.log('STOP!');
// } else {
//    console.log('Incorrect color!');
// }


// SWITCH statement
const color = 'green';

switch(color) {
   case 'green':  // запускает часть кода в случае когда цвет зеленый
      console.log('GO!!!');
      break;  
   case 'yellow':  // запускает часть кода в случае когда цвет желтый
      console.log('GET RDY!');
      break;
   case 'red':  // запускает часть кода в случае когда цвет красный
      console.log('STOP!!!');
      break;
   default:    // Запускает часть кода в любом другом случае
      console.log('Incorrect color!');
}


const weekday = 'sunday';

switch(weekday) {
   case 'monday':
      console.log("Keep calm and pretend it's not a monday");
      break;
   case 'tuesday':
      console.log("Tuesday is " + "just monday's ugly sister.");
      break;
   case 'wednesday':
      console.log("Nothing screws " + "up your friday like " + "realizing it's only " + "wednesday!");
      break;
   case 'thursday':
      console.log("It's friday! " + "Sorry... Just practicing " + "for tomorrow!");
      break;
   case 'friday':
      console.log("Stay strong! " + "Weekend is soon!");
      break;
   case 'saturday':
   case 'sunday':
      console.log("Why are " + "Saturday and Sunday the " + "strongest days? Because " + "all the others are " + "week-days!");
      break;
   default:
      console.log("This is not week day I know...");
}