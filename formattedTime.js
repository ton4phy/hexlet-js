
// formattedTime.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.

// Пример:

// formattedTime(5); // 00:05
// formattedTime(15); // 00:15
// formattedTime(60); // 01:00
// formattedTime(67); // 01:07
// formattedTime(175); // 02:55
// formattedTime(600); // 10:00
// formattedTime(754); // 12:34


//V1
//===========================================
const formattedTime = (num) => {
    let hour = 0;
    let minute = 0;

    minute = num % 60;
    hour = (num - minute) / 60;
    if(hour < 10 && hour !== 0){
      hour = "0" + hour;
    }else if(hour === 0){
      hour = hour + "0"
    };
    return hour + ":" + minute;
};
//============================================
//V2
//============================================

  const formattedTime = (rawMinutes) => {
      const hours = Math.floor(rawMinutes / 60);
      const formattedHours = hours >= 10 ? hours : `0${hours}`;

      const minutes = rawMinutes % 60;
      const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

      return `${formattedHours}:${formattedMinutes}`;
};
//==============================================
