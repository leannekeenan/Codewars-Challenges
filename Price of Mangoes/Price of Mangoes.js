/*
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
*/

function mango(quantity, price){
    let discountThreshold = Math.floor(quantity / 3) * 2;
    let fullPrice = quantity % 3;
    
    let total = (discountThreshold + fullPrice) * price;
    
    return total;
  }