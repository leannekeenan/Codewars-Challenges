/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


*/
/*

These were all close, but would return NaN, not 0 when the array was empty

function findAverage(array) { //nope
    // your code here
    let total = 0
    for(let i = 0 ; i < array.length; i ++) {
      total += array[i]
    }
    console.log(total / array.length)
    if(isNaN(array)) {
      return 0
    }
  }

  function findAverage(array) { //nope
    // your code here
    let total = 0;
    let count = 0;
    
    array.forEach(function(number) {
      total += number;
      count++
    });
    
    console.log(total / count);
    return 0;
  
  }

  function findAverage(array) { //nope
    // your code here
    const initialValue = 0;
  const total = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
    console.log(total / array.length)
    if(array.length === 0) {
    return 0
  }
  }
  findAverage([10, 55, 80])
  findAverage([]);

  */

  function findAverage(array) {
    const average = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0) / array.length;
    if(array.length == 0){
      console.log(0);
    } else{
      console.log(average);
    }
  }

  findAverage([])
  findAverage([2, 5, 9, 13, 55, 100])




  function findAverage(array) {
    let initialValue = 0;
    let total = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue) / array.length;

    if(array.length == 0) {
      console.log(0)
    }else {
      console.log(total)
    }
  }

  function findAverage(array) {
    // your code here
    let total = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length;
    
    if(array.length == 0) {
      return 0
    }
    else {
      return total;
    }
  }