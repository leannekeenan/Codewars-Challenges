/*

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
*/

function comp(a, b) {
  if (a === null || b === null || a.length !== b.length) {
    return false;
  }
  //slice creates shallow copy of the orignal array
  //sort sorts through the shallow copy, leaving the orignal untouched
  //x & y represent array elements
  //to get accending order deduct value of y from x
  const sortedA = a.slice().sort((x, y) => x - y);
  const sortedB = b.slice().sort((x, y) => x - y);
  
  for (let i = 0; i < sortedA.length; i++) {
    //if the value of arrayA element squared is not equal to arrayB, return false; 
    if (sortedA[i] * sortedA[i] !== sortedB[i]) {
      return false;
    }
  }
  
  return true;
}