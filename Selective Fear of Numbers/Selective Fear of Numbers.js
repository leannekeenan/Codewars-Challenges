/*
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
*/

let AmIAfraid = function(day, num){
    if (day === "Monday") {
          return num === 12;
      } else if (day === "Tuesday") {
          return num > 95;
      } else if (day === "Wednesday") {
          return num === 34;
      } else if (day === "Thursday") {
          return num === 0;
      } else if (day === "Friday") {
          return num % 2 === 0;
      } else if (day === "Saturday") {
          return num === 56;
      } else if (day === "Sunday") {
          return num === 666 || num === -666;
      }
  }


  /***********************************************************/

  function AmIAfraid(day, num) {
    switch (day) {
      case "Monday":    return num == 12
      case "Tuesday":   return num > 95
      case "Wednesday": return num == 34
      case "Thursday":  return num == 0
      case "Friday":    return num % 2 == 0
      case "Saturday":  return num == 56
      case "Sunday":    return num == 666 || num == -666
    }
    
    return false
  }