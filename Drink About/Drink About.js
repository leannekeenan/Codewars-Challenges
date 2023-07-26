/*
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
*/

  function peopleWithAgeDrink(old) {
  
       if(old >= 0 && old < 14) {
         return 'drink toddy'
       }
       else if(old >= 14 && old <= 17) {
         return 'drink coke'
       }
       else if(old >= 18 && old <= 20) {
         return 'drink beer'
       }
       else if(old >= 21) {
         return 'drink whisky'
       }
       return '';
};


const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"



  const peopleWithAgeDrink = (age) => {
       switch (true) {
         case (age >= 21): return 'drink whisky'
         case (age >= 18): return 'drink beer'
         case (age >= 14): return 'drink coke'
         default: return 'drink toddy'
       }
     };