/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
*/

function betterThanAverage(classPoints, yourPoints) {
    //calculate the average of class points
    /*1. the starting total of teh array begins at  0*/
    let sum = 0;
    /*2. the for loop also begins at zero to calculate 
    how many numbers are within the classPoints array*/
    /*3. As long as the classPoints array is greater than 0, the loop will 
    continue*/
    for(let i = 0; i < classPoints.length; i++) {
      /*4. while the loop is true, each classPoints value will be added to the 
      sum array*/
      sum += classPoints[i]
    }
    
    /*5. The average point score of the class will be calculated by dividing the 
    sum of the class point total by the number of scores in the array*/
    const average = sum / classPoints.length;
    
    //compare the average to your Points
    /*6. if the average of the class scores is less than your personal score,
    return true*/
    if(yourPoints > average) {
      return true;
    }
    /*7. Otherwise, return false*/
    else {
      return false;
    }
  }
  