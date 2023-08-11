
/*
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/
var filterString = function(value) {
    let filtered = 0;
    
    for(let i = 0; i < value.length; i++) {//filter through value array
      if(value[i] >= '0' && value[i] <= '9') {// if the elelment is between the strings 0 - 9
         filtered = filtered * 10 + (value[i].charCodeAt(0) - '0'.charCodeAt(0)); 
        /*the filtered object will be multiplied by 10 and add the difference bwtween the ASCII value of value[i] 
        and the ASCII value of 0*/
      }
    }
  
    return filtered;
}


var FilterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}