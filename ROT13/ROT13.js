/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
    //empty string to hold result
    let result = '';
    
    //loop through message
    for(let i = 0; i < message.length; i++) {
      //create variable to hold each message character
      let character = message[i];
      
      //test to see if the character is a letter
      if(/[a-zA-Z]/.test(character)) {
        //check to see if the message character is lower case
        let lower = character.toLowerCase() === character
        //get the unicode value of the character
        let charCode = character.charCodeAt();
        //calculate new character shift using charCode and the # of characters it will be mocing (13)
        let shifted = charCode + 13;
        
        
        /*in order to wrap back to the start of the chatCodeAt values, 
        write a if statement that:*/
        
        //if the character is lower case AND
        //the charCode value is greater than 122 OR
        //the character is not lower case AND
        //the shifted value is greater than 90...
        
        
        if((lower && shifted > 122) || (!lower && shifted > 90)) {
          //subtract 26 from the shifted value
          shifted -=26 //(wraps back around from z to a)
        }
        //convert the shifted character to a string and add it to the result
        result += String.fromCharCode(shifted)
        
      }
      else {
        //for non-lettercbaracters, add them to the result
        result += character
      }
    }
    return result;
  }