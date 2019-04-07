'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let pass;
let key;

do {
  if (attemptsLeft === 1) {
    pass = prompt(`Введите пароль. У Вас ${attemptsLeft} попытка!`);
  } else {
    pass = prompt(`Введите пароль. У Вас ${attemptsLeft} попытки!`);
  }

  for (let i = 0; i < passwords.length; i += 1) {
    if (pass === passwords[i]) {
      key = true;
      alert('Добро пожаловать!');
      break;
    } else {
      key = false;
    }
  }

  attemptsLeft -= 1;

  if (key === false && attemptsLeft > 0 && pass !== null) {
    if (attemptsLeft === 1) {
      alert(`Неверный пароль, у вас осталось ${attemptsLeft} попытка!`);
    } else {
      alert(`Неверный пароль, у вас осталось ${attemptsLeft} попытки!`);
    }
  } else if (key === false && attemptsLeft === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  } else {
    continue;
  }
} while (pass !== null && key !== true && attemptsLeft !== 0);
