/*
Write  a function thet determins if a providede year is a leap year

Use these parameters
years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
*/

function isLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0) {
      return true;
    }
    else {
      return false;
    }
  }