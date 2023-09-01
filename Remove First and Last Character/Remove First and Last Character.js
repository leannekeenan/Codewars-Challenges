/*
Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    let result = '';
    
    if(str.length <= 2) {
      return ''
    }
    
    for(let i = 1; i < str.length - 1; i++) {
      result += str[i];
    }
    return result;
  };
  
  
  