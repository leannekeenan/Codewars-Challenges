/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

function makeNegative(num) {
    if(num <= 0) {
      return num;
    }
    else {
     return num = num - (num * 2) //will make a number negative by reducing to 0 and subtracting itself again
    }
    
  }