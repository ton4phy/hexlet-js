// Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.

// Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

// isHappyTicket.js
// Функция, проверяющая является ли номер счастливым
// (номер может быть как числового, так и строкового типа: см. примеры ниже).
// Функция должна возвращать true, если билет счастливый, или false, если нет.

// Примеры использования:

// import isHappyTicket from './isHappyTicket';

// isHappyTicket(385916); // true
// isHappyTicket(231002); // false
// isHappyTicket(128722); // true
// isHappyTicket('054702'); // true

//V1
//======================================
const isHappyTicket = (val) => {
    let str = String(val);
    let firstNum = str.substr(0, 3);
    let secondNum = str.substr(3, 3);
    const sum = (sume) => {
        let result = 0;
        for(let i = 0; i < sume.length; i++){
            result = result + Number(sume[i]);
        };
        return result;
    };
    return sum(secondNum) === sum(firstNum);
};
//======================================
//V2
//======================================
const sumDigits = (numberAsString) => {
  let sum = 0;
  for (let i = 0; i < numberAsString.length; i += 1) {
    sum += Number(numberAsString[i]);
  }
  return sum;
};

export default (number) => {
  const numberAsString = String(number);

  const leftPart = numberAsString.substr(0, 3);
  const rightPart = numberAsString.substr(3);

  return sumDigits(leftPart) === sumDigits(rightPart);
};
//======================================
