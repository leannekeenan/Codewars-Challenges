//Find the sum of all multiples of n below m

function sumMul(n,m){

    //set the starting total to 0
    let total = 0;
  
    //set start at 1.  if start * number is less than m, add one to the iterator 
    for(let i = 1; i * n < m; i++){
      //set the total to increase by the iterator value times the next number in the sequence
      total += i * n
    //if the total is greater than 0, return the total, else return 'INVALID
      }
    return total > 0 ? total : "INVALID"
  }