/*
Write a function that sorts the passed in array of numbers. If the function passes in an empty array or null, return an empty array.
*/

function solution(nums){
    if(!nums || nums.length === 0) {
      return [];
    }
    let sorted = [...nums].sort((a, b) => a - b);
    return sorted;
  }