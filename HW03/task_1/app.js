'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(alllogins, login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(allLogins, login) {
  for (const log of logins) {
    if (log === login) {
      return false;
    }
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (isLoginUnique(logins, login) && isLoginValid(logins, login)) {
    logins.push(login);
    console.log('Логин успешно добавлен!');
  } else {
    if (isLoginValid(logins, login) === false) {
      console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    } else if (isLoginUnique(logins, login) === false) {
      console.log('Такой логин уже используется!');
    }
  }
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
