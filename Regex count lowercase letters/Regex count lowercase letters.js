/*
Your task is simply to count the total number of lowercase letters in a string.
*/
function lowercaseCount(str){
    let count = 0;
      for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[a-z]/)) {
          count++;
        }
        
      }
    return count;
  }
  