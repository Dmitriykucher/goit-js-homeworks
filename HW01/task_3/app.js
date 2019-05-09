'use strict';

let price;
let intCity = prompt('Введите страну доставки:');

if (intCity === null) {
  console.log(`Жаль, возвращайтесь к нам еще(`);
} else {
  switch (intCity.toLowerCase()) {
    case 'китай':
      price = 100;
      console.log(
        `Доставка в ${intCity.toLowerCase()} будет стоить ${price} кредитов`,
      );
      break;

    case 'южная америка':
      price = 250;
      console.log(
        `Доставка в ${intCity.toLowerCase()} будет стоить ${price} кредитов`,
      );
      break;

    case 'австралия':
      price = 170;
      console.log(
        `Доставка в ${intCity.toLowerCase()} будет стоить ${price} кредитов`,
      );
      break;

    case 'индия':
      price = 80;
      console.log(
        `Доставка в ${intCity.toLowerCase()} будет стоить ${price} кредитов`,
      );
      break;

    case 'ямайка':
      price = 120;
      console.log(
        `Доставка в ${intCity.toLowerCase()} будет стоить ${price} кредитов`,
      );
      break;

    default:
      console.log('В вашей стране доставка не доступна.');
  }
}
