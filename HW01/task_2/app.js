'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let howMuchDroid = prompt('Сколько дроидов вы хотите приобрести:');
const totalPrice = howMuchDroid * pricePerDroid;

if (howMuchDroid * howMuchDroid > 0 && howMuchDroid * howMuchDroid < credits) {
  console.log(
    `Вы купили ${howMuchDroid} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
} else if (credits < totalPrice) {
  console.log('Недостаточно средств на счету!');
} else if (howMuchDroid === null) {
  console.log('Отменено пользователем!');
}
