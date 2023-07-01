//Return the number (count) of vowels in the given string.

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      if(vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }