/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/


function digitize(n) {
  //code here
  //"toString" object  constructs list of numbers held in 'n' as a string
  //.split() seperates each string element creating an array
  //.reverse() changes array element order
  //.map() accepts the Number constructor which returns a new array with the new order of the array elements as numbers
   return n.toString().split('').reverse().map(Number)  
}