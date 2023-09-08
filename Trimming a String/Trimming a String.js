/*
Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.


If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.
*/

function trim(str, size) {
    // If the string is smaller or equal to the maximum string length, return it as is
    if (str.length <= size) {
      return str;
    }
  
    // Calculate the actual size considering the dots
    let actualSize;
    
    if(size <= 3) {
      actualSize = size
    }
    else {
      actualSize = size - 3
    }
  
    // Trim the string and add "..." to the end
    return str.slice(0, actualSize) + '...';
  }
 