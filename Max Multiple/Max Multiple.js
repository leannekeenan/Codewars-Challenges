/*
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.
*/

function maxMultiple(divisor, bound){
  let N = Math.floor(bound / divisor) * divisor;
  return N;
}


const maxMultiple = (divisor,bound) => bound - bound % divisor;