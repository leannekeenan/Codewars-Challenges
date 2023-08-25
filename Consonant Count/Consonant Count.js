/*
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


*/


function consonantCount(str) {
    let count = 0;
    let consonants = /[bcdfghjklmnpqrstvwxyz]/ig;
  
    let matches = str.match(consonants);

    if(matches) {
      count = matches.length
    }
  
    return count;
}

  console.log(consonantCount('Hello to all'))


  /*************************************************/

  function consonantCount(str) {
    return str.split('').filter(v=>/[bcdfghjklmnpqrstvwxyz]/ig.test(v)).length
  }