// функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. 
// Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

// Пример:

// isPowerOfThree(1); // true (3^0)
// isPowerOfThree(2); // false
// isPowerOfThree(9); // true (3^2)

//V1 
//===================================
const isPowerOfThree = (num) => {
    let num2 = num;
    if(num === 1 || num === 3){
        return true;
    } else {
        while(num2 % 3 === 0){
            num2 = num2 / 3
            if(num2 === 1){
                break
            };
        };
    };
    return (num2 === 1)? true : false;
};
//===================================
//V2
//===================================
const isPowerOfThree = (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};
//===================================
