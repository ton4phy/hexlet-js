// функцию, которая переворачивает строку задом наперед, используя рекурсию.
// Например:

// reverse('str');    // rts
// reverse('hexlet'); // telxeh   

//=========================================
const reverse = (str) => {
        if(str.length > 0){
            return reverse(str.substr(1)) + str[0];
        }else {
            return str;
        };
    };
//==========================================
