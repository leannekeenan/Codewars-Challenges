/*
Build a function that returns an array of integers from n to 1 where n>0.
*/

const reverseSeq = n => {
    const results = [];
    for(let i = n; i > 0; i--) {
      results.push(i)
    }
    return results;
  };

console.log(reverseSeq(4));