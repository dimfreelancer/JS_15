'use strict';

console.log('Это первый Урок 2 Домашка Обязательное');


// 1) Следующим переменным присвоить значения 

let money = 57000; //любое число “Доход за месяц”
let income = 'Фриланс, Офисная работа'; //строка с дополнительными доходом
let addExpenses = 'ИтерНет, Такси, коМуналка, ПИТАНИЕ, Транспортные расходы'; //строка с перечислением дополнительных расходов через запятую 
let deposit = true; //любое булево значение
let mission = 60000; //любое число Какую сумму хочу накопить за данный период
let period = 2; //число от 1 до 12 месяцев



// 2) Используя методы и свойства

//    - Вывести в консоль тип данных значений переменных money, income, deposit
console.log('money:', money, '\tmoney typeof:', typeof money);
console.log('income:', income, '\tincome typeof:', typeof income);
console.log('deposit:', deposit, '\tdeposit typeof:', typeof deposit);

//   - Вывести в консоль длину строки addExpenses
console.log('addExpenses length = ', addExpenses.length);

//   - Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log(`Период равен ${period} месяцев`);
console.log('Цель заработать ' + mission + ' рублей');

//   - Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.dir(addExpenses.toLowerCase().split(', '));

//   - Объявить переменную budgetDay и присвоить дневной бюджет = доход за месяц/30
let budgetDay = money / 30;

//   - Вывести в консоль budgetDay
console.log('budgetDay: ', budgetDay);


