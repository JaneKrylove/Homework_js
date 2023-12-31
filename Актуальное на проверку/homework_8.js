// Домашняя работа по итогам урока 8

/*

1. Зачем нужен формат JSON?

Обозначение объектов JavaScript (JSON - JavaScript Object Notation) - текстовый формат 
для представления структурированных данных на основе синтаксиса объекта JavaScript.

Используется для передачи данных в веб-приложениях (например, отправка некоторых данных
с сервера клиенту,таким образом чтобы это могло отображаться на веб-странице или наоборот)


2. Какие данные вы можете представить в этом формате?

JSON-объект — это неупорядоченное множество пар «ключ:значение».
Может передавать строки, числа, объекты, массивы, логические значения true/false, null.

3. Какая структура данных у формата?

JSON-объект — это неупорядоченное множество пар «ключ:значение».
Пары «ключ-значение» разделены запятыми.
{
  "name": "Maria",
  "age": 39
}

4. Можно ли представить любой набор данных в этом формате?

Набор данный в формате JSON должен соответствовать формату ключ:значение 
или как набор упорядоченных значений.

Какие практические задачи можно решить, применяя его?

Например, запрос на сервере и выгрузка оттуда каких-либо статей на сайт в соответствующие 
разделы, в системе сборки gulp в файле json хранится информация о проекте, в частности, зависимости, 
которые используются в проекте.

*/
