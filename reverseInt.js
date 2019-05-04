// функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.

// reverseInt(13); // 31
// reverseInt(-123); // -321

//V1
//=================================
const reverseInt = (str) => {
    let strNew = "" + str;
    let result = "";

    if(strNew[0] === "-"){
        result = result + "-";
        for(let i = strNew.length - 1; i > 0; i--) {
            result = result + strNew[i];
        };
    } else {
        for(let i = strNew.length - 1; i >= 0; i--) {
            result = result + strNew[i];
        };
    };
    return result;
};
//==================================
//V2
//==================================
const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num));
  let reversedStr = '';
  let i = numAsStr.length - 1;

  while (i >= 0) {
    reversedStr += numAsStr[i];
    i -= 1;
  }
  const reversedModule = Number(reversedStr);

  return num < 0 ? -reversedModule : reversedModule;
};
//===================================
