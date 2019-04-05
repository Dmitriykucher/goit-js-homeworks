'use strict';

let price;
let intCity = prompt('Введите страну доставки:');
let massege;

if (intCity === null) {
  massege = `Жаль, возвращайтесь к нам еще(`;
} else {
  switch (intCity.toLowerCase()) {
    case 'китай':
      price = 100;
      break;

    case 'южная америка':
      price = 250;
      massege = `Доставка в ${intCity.toLowerCase()} будет стоить ${price} кредитов`;
      break;

    case 'австралия':
      price = 170;
      massege = `Доставка в ${intCity.toLowerCase()} будет стоить ${price} кредитов`;
      break;

    case 'индия':
      price = 80;
      massege = `Доставка в ${intCity.toLowerCase()} будет стоить ${price} кредитов`;
      break;

    case 'ямайка':
      price = 120;
      massege = `Доставка в ${intCity.toLowerCase()} будет стоить ${price} кредитов`;
      break;

    default:
      massege = 'В вашей стране доставка не доступна.';
  }
}
console.log(massege);
