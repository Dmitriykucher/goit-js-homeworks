'use strict';

let input;
let inputNum;
const numbers = [];

do {
  input = prompt('Введите число:');
  inputNum = Number(input);
  if (input >= 0 || input < 0) {
    numbers.push(inputNum);
  } else {
    alert('Вы ввели не число. Попробуйте еще раз!');
    continue;
  }
} while (input !== null);

let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

console.log(`Общая сумма чисел равна: ${total}`);
