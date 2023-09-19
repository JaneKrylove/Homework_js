// Домашняя работа по итогам урока 5

/* Напишите скрипт, который заменяет строку "luke, I am your father" 
на "Luke, I am your father" и выводит в консоль новую строку.
*/

// Решение:
/*
let sentence = "luke, I am your father";
sentence = sentence[0].toUpperCase() + sentence.slice(1);
console.log(sentence);

*/


/* Напишите скрипт, который сравнивает две строки: "AbcdEfg" и "abCDEFg",
затем приводит их к единому написанию - заглавными буквами и сравнивает вновь.
Результаты обоих сравнений должны вывоиться в консоль.
*/

// Решение:
/*
let str1 = "AbcdEfg";
let str2 = "abCDEFg";
if (str1 !== str2){
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
}
console.log(str1 === str2);
*/

/* Напишите скрипт, который обрабатывает массив чисел
 [2000, 2001, 2002, 2003, 2004 и 2005]. Скрипт должен определить и вывести в
 консоль високосный год (или несколько) из набора чисел массива.
 */

// Решение:
/*
let arrayOfYear = [2000, 2001, 2002, 2003, 2004, 2005];
let newArrayOfYear = [];
for (i = 0; i < arrayOfYear.length; i++) {
    if (arrayOfYear[i] % 4 === 0 && arrayOfYear[i] % 100 !== 0) {
        newArrayOfYear.push(arrayOfYear[i]);
    }
}  
console.log(newArrayOfYear);
*/

 /* Напишите скрипт, который обрабатывает массив чисел [6, 187, 66, 4, 67, 
30, 18]. Скрипт должен отсортировать массив сначала с помощью метода 
sort,, а затем - reverse. Результаты обоих сортировок должны выводить в 
консоль.
*/

// Решение:
/*
let array = [6, 187, 66, 4, 67, 30, 18];
console.log(array.sort());
console.log(array.reverse());

*/
