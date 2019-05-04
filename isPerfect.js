// Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

// Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). 
// Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

//V1
//======================================
const  isPerfect = (num) => {
    let result = 0;

    for(let i = 1; i < num; i++){
        if(num % i === 0){
            result = result + i;
        };
    };
    return (result === num)? true : false;
};
//======================================
//V2
//======================================
const isPerfect = (num) => {
  if (num === 0) return false;

  let sum = 0;
  const upperBorder = num / 2;

  for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
    if (num % divisor === 0) sum += divisor;
  }

  return sum === num;
};
//======================================
