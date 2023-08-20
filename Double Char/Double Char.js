/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

function doubleChar(str) {
    let doubledStr = str.split('').map(char => char.repeat(2)).join('');
      return doubledStr;
  }