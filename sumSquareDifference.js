// Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.
//V1
//=========================================
const sumSquareDifference = (n) => {
    let sumNumber = 0;
    let sumSquereNumber = 0;
    const square = (num) => {
        return num * num;
    };
    for(let i = 1; i <= n; i++){
        sumNumber += i;
        sumSquereNumber += square(i);
    };
    return square(sumNumber) - sumSquereNumber;
};
//===============================================
//V2
//===============================================
const sumOfSquares = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i * i;
    i += 1;
  }

  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i += 1;
  }

  return sum * sum;
};

const sumSquareDifference = n =>
  squareOfSum(n) - sumOfSquares(n);
//================================================
