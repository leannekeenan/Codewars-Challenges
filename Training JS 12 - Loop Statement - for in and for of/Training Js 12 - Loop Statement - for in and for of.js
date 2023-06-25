/*
Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array.
*/

function giveMeFive(obj){
    let array = [];
    
    for(var key in obj) {
      if(key.length === 5) {
        array.push(key);
      }
      
      var value = obj[key];
      
      if(value.length === 5) {
        array.push(value)
      }
    }
    
    return array;
    
  }