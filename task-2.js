// модуль 7 Задание 2

function checkObj(str, obj) {
  for (key in obj) {
    if (key == str) {
      return true;
    } }
      return false;
  }