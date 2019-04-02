'use strict';

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

message = prompt('введите пароль:');

if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (message === null) {
  message = 'Отмененно пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);
