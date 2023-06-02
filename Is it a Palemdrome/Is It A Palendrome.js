//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let reverse = x.split('').reverse().join('').toLowerCase();
    if(x === '') {
         return true;
    }
    else if(x.toLowerCase() === reverse) {
        return true;
    }
    else {
        return false;
    }
    return;
}


  console.log(isPalindrome('a'));
  console.log(isPalindrome('aba'));
  console.log(isPalindrome('Abba'));
  console.log(isPalindrome('hello'));
  console.log(isPalindrome('Bob'));
  console.log(isPalindrome('Madam'));
  console.log(isPalindrome('AbBa'));
  console.log(isPalindrome(''));
 