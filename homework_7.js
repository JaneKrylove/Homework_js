// Домашняя работа по итогам урока 7

/*  2. Создайте скрипт. Напишите в нем функцию, которая проверяет, 
является ли заданная строка палиндромом. Итог проверки должен 
выводите в консоль. */

// Решение:

/*
function isPalindrom(string) {
    let result = "";
    let str = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    
    if (string === "") {
        return result = "Please, enter something";
    }

        for (let i = 0; i < string.length/2; i++) {
           if (str[i] != str.slice(-1-i)[0]) {
            return result = `The stroke ${string} is not palindrom`;
        }
    }
    return result = `WOW! The string ${string} is palindrom`;
}

console.log(isPalindrom('22'))

*/
/* 3. Создайте скрипт. Напишите в нем функцию, которая принимает число 
в качестве параметра и проверяет, является ли число простым или нет. 
Итог проверки должен выводите в консоль. 

// Решение:


function isPrimeNumber(number) {
        if (number  === 1) {
            return 'This number is not prime';
        } else if (number === 2) {
            return 'Yhis numbet is prime';
        } else {
            for (let i = 2; i <= number/2; i++)
            if (number % i === 0) {
                return 'Sorry, this number is not prime';
            }
        }   return 'Bingo! It is prime!';
    }

console.log(isPrimeNumber(12));

*/

/* 4. Создайте скрипт. Напишите в нем функцию, которая определяет 
возраст человек по дню, месяцу и году рождения. На вход функция 
должна принимать данные в формате Date (создается на основе 3 
чисел). Итог проверки выводите в консоль. */

// Решение:

/*
function countAge(dateBirth) {
    let diffTime = Date.now() - dateBirth.getTime();
    let presentAge = new Date(diffTime);

    return Math.abs (presentAge.getUTCFullYear() - 1970);

}

console.log(countAge(new Date(1998, 4, 31)))

*/

/* 5. Создайте скрипт. Напишите в нем функцию, которая определяет, была 
ли введенная дата выходным днем. */

// Решение:

/*
let isWeekend = function(date) {
    let day = new Date(date);
    if (day.getDay() == 6 || day.getDay() == 0)
    {
        return "weekedn";
    }
    else {
        return "weekday";
    }
}
console.log(isWeekend('Oct 17, 2023'));

*/