// модуль 7 Задание 1

function show (a) {

    for (const key in a) {
      if (a.hasOwnProperty(key)){
        console.log(key + ': ' + a[key] );
      }
    }
  }