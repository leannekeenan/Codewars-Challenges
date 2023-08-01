/*
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
*/

function expressionMatter(a, b, c) {
    let combinations = [
       a + b + c,
       a + b * c,
       a * b + c,
       a * b * c,
       (a + b) * c,
       a * (b + c),
       a + (b * c),
       (a * b) + c,
       a * b + c,
       a * (b * c),
       (a + b) * c,
       a * (b + c)
    ]
   
    return Math.max(...combinations)
  }