// Домашняя работа по итогам урока 1

/*
let newName = "Eva"; //Лучше использовать const, так как знач переменной меняться не будет
console.log(`Имя: ${newName}`);

let newAge = 35;
console.log(`Возраст: ${newAge}`);

let marriedStatus = true;
console.log(`Есть супруг/супруга: ${marriedStatus}`);

*/


/*
let newName = "Eva";
console.log("Тип первой переменной: " + typeof newName);

let newAge = 35;
console.log("Тип второй переменной: " + typeof newAge);

let marriedStatus = true;
console.log("Тип второй переменной: " + typeof marriedStatus);

*/

// Домашняя работа по итогам урока 2

/*
let hour = 1;
let sec = (hour*60*60);

console.log(`В часе ${sec} секунд`);

*/

/*
let number = 0;

number += 7;
number *= 4;
number -= 8;
number /= 4;
number **= 3;
let lastNumber = number % 5;

console.log(lastNumber);

*/

/*
console.log(5 > 4);
console.log("ананас" > "яблоко");
console.log("2" > "12");
console.log(undefined === null);
console.log(undefined === null);
console.log(null === "0");
console.log(null === +"0");

*/

// Домашняя работа по итогам урока 3

// Скрипт, который определяет, к какой четверти часа относится хранимое
// в отдельной переменной количество минут.

/*
const minutes = 38;

if (minutes < 0 || minutes > 60) {
    console.log(`Please, enter correct number`);
 } else if (minutes > 0 && minutes <= 15) {
console.log(`${minutes} minutes - quater # 1`);
 } else if (minutes >= 16 && minutes <= 30) {
   console.log(`${minutes} minutes - quater # 2`);
 } else if (minutes >= 31 && minutes <= 45) {
   console.log(`${minutes} minutes - quater # 3`);
 } else if (minutes <= 46 && minutes <= 60) {
   console.log(`${minutes} minutes - quater # 4`);
 }

*/

// Скрипт, который по номеру месяца определяет время года. Если номер с таким
// месяцем не сущетсвует, скрипт должен выводить сообтветствующее
// сообщение в консоль.

/*
const monthNumber = 12;

if (typeof (monthNumber) !== "number") {
  console.log(`Use number from 1 to 12 for this operation`);
} else if (monthNumber <= 2 || monthNumber === 12) {
  console.log(`It's a winter`);
} else if (monthNumber >= 3 && monthNumber <= 5) {
  console.log(`Spring come`);
} else if (monthNumber >= 6 && monthNumber <= 8) {
  console.log(`Summer time`);
} else if (monthNumber >= 9 && monthNumber <= 11) {
  console.log(`Autumn come`);
}

*/

// Скрипт, который выводит в консоль квадрат числа, если оно четное,
// и его кубическую степень в противном случае.

/*
let number = 3;
let result = 0;

if (number % 2 === 0) {
    result = number **2;
} else if (result = number **3);

console.log(result);
   
*/