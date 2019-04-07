'use strict';

let input;
const numbers = [];

do {
  input = prompt('Введите число:');
  if (input >= 0 || input <= 0) {
    numbers.push(input);
  }
  // else if (input === '') {
  //   alert('Вы ввели не число. Попробуйте еще раз!');
  //   continue;
  // }
  else {
    alert('Вы ввели не число. Попробуйте еще раз!');
    continue;
  }

  console.log(numbers);
} while (input !== null);

let total;
let idx = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers.length === 1) {
    alert(`У вас только одно число! ${numbers[0]}`);
    break;
  } else {
    total += Number(numbers[idx]);
    idx += 1;
  }
}

console.log(total);
console.log(idx);
console.log(numbers);
console.log(numbers.length);
// console.log(typeof numbers[0]);

// 1. решить проблему когда нажимаешь просто ОК
// 2. решить проблеиу с тотал
