/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/


function bmi(weight, height) {
    let score = weight / Math.pow(height, 2)
    
    if(score <= 18.5) {
      return  "Underweight"
    }
    
    else if(score <= 25) {
      return  "Normal"
    }
    
    if(score <= 30.0) {
      return  "Overweight"
    }
    
    if(score > 30) {
      return "Obese"
    }
  }