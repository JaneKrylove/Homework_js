// Домашняя работа по итогам урока 6

/* Напишите скрипт, который создает объект “дни недели”. В свойствах 
объекта запишите цифры от 1 до 7. Присвойте им значения русских 
названий дней недели. 
Выведите объект в консоль.
Выведите конкретный день недели в консоль.
Удалите один из дней недели.
Снова выведите объект в консоль - он не должен содержать удаленный 
день. 
*/

let week = new Map ([
    [1,"понедельник"],
    [2, "вторник"],
    [3, "среда"],
    [4, "четверг"],
    [5, "пятница"],
    [6, "суббота"],
    [7, "воскресенье"],
]);
    console.log(week);
    console.log(week.get(3));
    console.log(week.delete(6));
    console.log(week);
    