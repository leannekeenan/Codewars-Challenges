
function feast(beast, dish) {
  let firstChar = beast[0];//get first letter by setting beast strings to array elements
  let lastChar = beast[beast.length - 1];
  if(dish[0] === firstChar && dish[dish.length - 1] === lastChar) {
    return true;
    
  }
  else {
    return false
  }
  }

console.log(feast("great blue heron", "garlic naan"))
console.log(feast("chickadee", "chocolate cake"))
console.log(feast("brown bear", "bear claw"))
console.log(feast("duck", "salad"))

