/*
An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.
*/


function solve(n) {
    let count = [];
    let notes = [500, 200, 100, 50, 20, 10];  // Notes should be in descending order
    
    for (let i = 0; i < notes.length; i++) { 
      while(n >= notes[i]) { //while the cash requested is greater or equal to the value of the denomination note...
        count.push(notes[i]);//...push the note type to the count array...
        n -= notes[i];//..and minus its value from the cash request total
      } 
    }
    
     if(n !== 0) { //if the cash request can not be equally divided with the available denominations...
        return -1;//...return -1
      }
    
    return count.length; //print the length of count to see how many notes were needed for the cash request
  }





  /******************************************************************************* */


  function solve(n) {
    const arr = [500, 200, 100, 50, 20, 10];
    let count = 0
    for (let i of arr){
      while( i <= n ){
        n = n - i
        count += 1
      }
    }
    return n !== 0 ? -1 : count
  }