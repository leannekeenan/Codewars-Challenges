/*
Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)
*/

function isDivisible(n, ...arr){
    if(arr.length === 0) {
      return true;
    }
    
    for(let elements of arr) {
      if(arr === 0) {
        return false;
      }
      if(n % elements !==0) {
        return false;
      }
    }
    return true;
  }



/****************************************************************/
function isDivisible(firstN, ...otherN){
  return otherN.every(n => firstN % n === 0);
}

/****************************************************************/

const isDivisible = (n, ...xs) => xs.every(x => n % x == 0);

/****************************************************************/

function isDivisible(n) {
  for (var i = 1; i < arguments.length; i++) {
    if (n % arguments[i]) { return false };
  }
  return true;
}