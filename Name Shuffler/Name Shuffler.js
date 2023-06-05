/*
Write a function that returns a string in which firstname is swapped with last name.
*/

function nameShuffler(str){
    //1 split the string into array elements
    //2 reverse the array elements
    //3 join the array elements as a string
    return str.split(" ").reverse().join(" ")
  }