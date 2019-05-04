// Счастливые числа
// Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу.
// Например:

// 7   => 7^2 = 49,
// 49  => 4^2 + 9^2 = 16 + 81 = 97,
// 97  => 9^2 + 7^2 = 81 + 49 = 130,
// 130 => 1^2 + 3^2 + 0^2 = 10,
// 10  => 1^2 + 0^2 = 1.
// Вывод: исходное число 7 - счастливое.

// isHappyNumber.js
// Функция, которая должна вернуть true, если число счастливое, и false, если нет.
// Количество итераций процесса поиска необходимо ограничить числом 10.
//V1
//=============================================
const isHappyNumber = (num) => {
    let value = num;
    const square = (value) =>{
        return +value * +value
    };

    const sumOfSquareDigits = (str) => {
        let newStr = "" + str;
        let result = 0;
        for(let i = 0; i < newStr.length; i++){
            result = result + square(newStr[i]);
        };
        return result;
    };

    for(let i = 0; i <= 10; i++){
        value = sumOfSquareDigits(value);
        if(value === 1){
            break;
        };
    };

    return (value === 1) ? true : false;
};
//=============================================
//V2
//=============================================
const isHappyNumber = (num) => {
  let number = num;
  for (let i = 0; i < 10; i += 1) {
    number = sumOfSquareDigits(number);
    if (number === 1) {
      return true;
    }
  }
  return false;
};
//=============================================
