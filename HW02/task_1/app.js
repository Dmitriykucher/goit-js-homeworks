'use strict';

let input;
let inputNum;
const numbers = [];

do {
  input = prompt('Введите число:');
  inputNum = Number(input);
  if (input > 0 || input < 0) {
    numbers.push(inputNum);
  } else if (inputNum === 0) {
    continue;
  } else {
    alert('Вы ввели не число. Попробуйте еще раз!');
    continue;
  }
  console.log(numbers); //для наглядности
} while (input !== null);

let total = 0;
let idx = 0;

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[idx];
  idx += 1;
}

if (numbers.length === 0) {
  console.log('Вы не ввели ни одного числа.');
} else {
  console.log(`Общая сумма чисел равна: ${total}`);
}
