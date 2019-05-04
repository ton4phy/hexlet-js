// Функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.
// invertCase('Hello, World!'); // hELLO, wORLD!
// invertCase('I loVe JS');     // i LOvE js
//V1
//====================================================
const invertCase = (value) => {
    let result = "";
    let str = value + "";

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            result = result + str[i].toLowerCase();
        } else if(str[i] === str[i].toLowerCase()){
            result = result + str[i].toUpperCase();
        } else if(str[i] === " "){
            result = result + str[i];
        };
    };
    return result;
};
//====================================================
//V2
//====================================================
const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const upper = str[i] === str[i].toUpperCase();
    result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
  }

  return result;
};
//===================================================
