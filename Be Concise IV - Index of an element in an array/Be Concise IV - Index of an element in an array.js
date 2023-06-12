/*
Provided a function named find  that accepts two parameters in the following order: array, element, return the index of the element if found and "Not found" otherwise. Shorten the code as much as possible in order to meet the strict character count (no more than 161) You may assume that all array elements are unique.




function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}

*/

function find(a, e) {
    return a.indexOf(e)>=0?a.indexOf(e):"Not found";
  }