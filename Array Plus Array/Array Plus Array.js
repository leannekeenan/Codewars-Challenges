/*
sum of two arrays elements into a single value
*/

function arrayPlusArray(arr1, arr2) {
    let result = arr1.concat(arr2);
    return result.reduce((acc, cur) => acc + cur, 0); 
  }