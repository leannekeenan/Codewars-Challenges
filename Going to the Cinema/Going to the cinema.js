/*
My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
Example:
If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

ceil(price of System B) < price of System A.
*/

function movie(card, ticket, perc) {
    let numberOfTimesJohnGoesToTheCinema = 0; // starting # of theater visits
    let system_A = 0; //Total cost of system A
    let system_B = card; //Total cost ofsystem B
    
    while(Math.ceil(system_B) >= Math.ceil(system_A)) {//while discount meets or exceeds system A
      numberOfTimesJohnGoesToTheCinema++;//starting value goes up by 1
      system_A += Math.floor(ticket + 0.9)//total $ of system A ticket
      system_B += ticket * Math.pow(perc, numberOfTimesJohnGoesToTheCinema)
      //total $ of system B ticket
    }
    return numberOfTimesJohnGoesToTheCinema// return number of visits when system A & B are equal or B > A
  };